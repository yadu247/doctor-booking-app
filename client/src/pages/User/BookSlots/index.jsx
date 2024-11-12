import Input from '../../../components/Input';
import axios from '../../../utils/axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { getId } from '../../../utils/authentication';
import Button from '../../../components/Button';

import './book-slots.css';

const BookSlots = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();

  const [selectedDate, setSelectedDate] = useState(
    moment().format('yyyy-MM-DD')
  );
  const [slots, setSlots] = useState([]);

  const getSlotByDate = async () => {
    const response = await axios.get(
      `/slot?doctor=${doctorId}&date=${selectedDate}`
    );

    setSlots(response.data);
  };

  useEffect(() => {
    getSlotByDate();
  }, [selectedDate]);

  const onChange = e => {
    setSelectedDate(e.target.value);
  };

  const onBookSlot = async id => {
    const response = await axios.post('/slot/book', {
      slot: id,
      doctor: doctorId,
      user: getId(),
    });

    getSlotByDate();
  };

  const onCancelSlot = async id => {
    const response = await axios.patch('/slot/' + id);

    getSlotByDate();
  };

  const onClickAppointments = () => {
    navigate('/appointments');
  };

  return (
    <div className="book-slots">
      <div className="top">
        <Input onChange={onChange} label="Select Date" type="date" />
      </div>
      <div className="slots">
        {slots.map(item => {
          return (
            <div
              style={item.booked ? { backgroundColor: '#dddddd' } : {}}
              key={item._id}
              className="slot-card"
            >
              <p>{`${item.startTime} - ${item.endTime}`}</p>
              <button
                className="book-btn"
                style={{
                  display: item.booked ? 'none' : 'inline',
                  backgroundColor: item.booked ? '' : '#18bcfc',
                }}
                onClick={!item.booked ? () => onBookSlot(item._id) : () => {}}
              >
                {item.booked ? '' : 'Book Now'}
              </button>

              {item.booked ? (
                <button
                  className="cancel-btn"
                  onClick={
                    item.booked ? () => onCancelSlot(item._id) : () => {}
                  }
                >
                  Cancel
                </button>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <Button text="View Appointments" onClick={onClickAppointments} />
      </div>
    </div>
  );
};

export default BookSlots;
