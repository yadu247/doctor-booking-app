import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';

import './doctors.css';

const Doctors = () => {
  const navigate = useNavigate();

  const { hospitaldepartmentid } = useParams();

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctorsByHospitalAndDepartment();
  }, []);

  const onClickDoctor = doctorid => {
    navigate(`/doctor/${doctorid}`);
  };

  const getDoctorsByHospitalAndDepartment = async () => {
    const id = hospitaldepartmentid.split('&');
    const response = await axios.get(`/doctor?hos=${id[0]}&dep=${id[1]}`);
    setDoctors(response.data);
  };
  return (
    <div className="doctors">
      <div className="doctors-container">
        {doctors.map(item => {
          return (
            <div
              onClick={() => onClickDoctor(item._id)}
              className="doctors-item"
            >
              <h1>{item.firstname + ' ' + item.lastname}</h1>
              <p>{item.specialization}</p>
              <img src={item.image} alt="Doctor image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
