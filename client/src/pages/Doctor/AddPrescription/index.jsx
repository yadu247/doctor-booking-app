import { getId } from '../../../utils/authentication';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Textarea from '../../../components/Textarea';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';

import './add-prescription.css';

const AddPrescription = () => {
  const navigate = useNavigate();
  const { appointmentAndUserId } = useParams();

  const [doctorId, setDoctorId] = useState(getId());
  const [prescription, setPrescription] = useState('');

  const onChange = e => {
    setPrescription(e.target.value);
  };

  const onClick = async () => {
    const id = appointmentAndUserId.split('&');

    const response = await axios.post('/prescription', {
      comments: prescription,
      doctor: doctorId,
      appointment: id[0],
      user: id[1],
    });
    navigate('/doctor/prescriptions');
  };

  return (
    <div className="add-prescription">
      <div className="form">
        <Textarea label="Prescription" onChange={e => onChange(e)} />
        <div className="btn-container">
          <Button text="Add" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default AddPrescription;
