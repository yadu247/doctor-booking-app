import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';

import './departments.css';

const Departments = () => {
  const navigate = useNavigate();

  const { hospitalid } = useParams();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartmentsbyHospital();
  }, []);

  const onClickDepartment = departmentid => {
    navigate(`/doctors/${hospitalid}&${departmentid}`);
  };

  const getDepartmentsbyHospital = async () => {
    const response = await axios.get(`/hospital/${hospitalid}`);
    setDepartments(response.data.department);
  };
  return (
    <div className="departments">
      <div className="departments-container">
        {departments.map(item => {
          return (
            <div
              onClick={() => onClickDepartment(item._id)}
              className="departments-item"
            >
              <h1>{item.name}</h1>
              <p>{item.about}</p>
              <img src={item.image} alt="Department Image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Departments;
