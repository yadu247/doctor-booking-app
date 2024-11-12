import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './locations.css';

const Locations = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const onClickLocation = name => {
    navigate(`/hospitals/${name}`);
  };

  const getLocations = async () => {
    const response = await axios.get('/location');
    setLocations(response.data);
  };

  return (
    // <div className="locations">
    <div className="locations-container">
      {locations.map(item => {
        return (
          <div
            onClick={() => onClickLocation(item.name)}
            className="location-item"
          >
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export default Locations;
