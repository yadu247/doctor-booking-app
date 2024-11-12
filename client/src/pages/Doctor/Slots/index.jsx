import { useEffect, useState } from 'react';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';
import Button from '../../../components/Button';
import './slots.css';

const Slots = () => {
  const [doctorId, setDoctorId] = useState(getId());
  const [slots, setSlots] = useState([]);

  const getSlots = async () => {
    const response = await axios.get(`/slot/${doctorId}`);
    setSlots(response.data);
  };

  const onClickDelete = async id => {
    const response = await axios.delete(`/slot/${id}`);
    getSlots();
  };

  useEffect(() => {
    getSlots();
  }, []);

  return (
    <div className="slots">
      {slots.map(item => {
        return (
          <div className="slot-card">
            <p>Date: {item.date}</p>
            <p>Time: {`${item.startTime} - ${item.endTime}`}</p>
            <p className={item.booked ? 'booked' : 'not-booked'}>
              {item.booked ? 'Booked' : 'Not booked'}
            </p>
            <div
              style={{ display: item.booked ? 'none' : 'flex' }}
              className="btn-container"
            >
              <Button
                onClick={() => {
                  onClickDelete(item._id);
                }}
                text="Remove"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slots;
