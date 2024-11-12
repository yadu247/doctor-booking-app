import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../../utils/axios';

import './hospitals.css';

const Hospitals = () => {
  const navigate = useNavigate();

  const { location } = useParams();

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getHospitalsbyLocation();
  }, []);

  const onClickHospital = id => {
    navigate(`/departments/${id}`);
  };

  const getHospitalsbyLocation = async () => {
    const response = await axios.get(`/hospital?location=${location}`);
    setHospitals(response.data);
  };

  return (
    <div className="hospitals">
      <div className="hospitals-container">
        {hospitals.map(item => {
          return (
            <div
              onClick={() => onClickHospital(item._id)}
              className="hospitals-item"
            >
              <h1>{item.name}</h1>
              <p>{item.about}</p>
              <img src={item.image} alt="Hospital Image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hospitals;
