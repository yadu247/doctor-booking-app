import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';
import Button from '../../../components/Button';

import './doctor.css';

const Doctor = () => {
  const navigate = useNavigate();
  const { doctorid } = useParams();

  const onClick = () => {
    navigate('/book-slots/' + doctorid);
  };

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    getDoctorById();
  }, []);

  const getDoctorById = async () => {
    const response = await axios.get(`/doctor/${doctorid}`);
    setDoctor(response.data);
  };
  return (
    <div className="doctor-container">
      <div className="doctor">
        <h1>{doctor.firstname + ' ' + doctor.lastname}</h1>
        <p>{doctor.specialization}</p>
        <p>{doctor.about}</p>
        <img src={doctor.image} alt="Doctor Image" />
        <Button text="See Slots" onClick={onClick} />
      </div>
    </div>
  );
};

export default Doctor;
