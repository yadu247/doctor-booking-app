import { getId } from '../../../utils/authentication';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';

import './add-slots.css';

const AddSlots = () => {
  const navigate = useNavigate();

  const [doctorId, setDoctorId] = useState(getId());

  const [slot, setSlot] = useState({ date: '', startTime: '', endTime: '' });

  const onChange = (e, key) => {
    setSlot({ ...slot, [key]: e.target.value });
  };

  const onClick = async () => {
    const response = await axios.post('/slot', { ...slot, doctor: doctorId });
    navigate('/doctor/slots');
  };

  return (
    <div className="add-slots">
      <div className="form">
        <Input label="Date" type="date" onChange={e => onChange(e, 'date')} />
        <Input label="Start Time" onChange={e => onChange(e, 'startTime')} />
        <Input label="End Time" onChange={e => onChange(e, 'endTime')} />
        <div className="btn-container">
          <Button text="Add Slot" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default AddSlots;
