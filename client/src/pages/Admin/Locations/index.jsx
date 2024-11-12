import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Container from '../../../components/Admin/Container';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import axios from '../../../utils/axios';

import './locations.css';

const Locations = () => {
  const navigate = useNavigate();

  const [locations, setLocations] = useState([]);
  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await axios.get('/location');
    setLocations(response.data);
  };

  const onAddLocationClick = () => {
    navigate('/admin/add-location');
  };

  const onEditLocationClick = id => {
    navigate(`/admin/edit-location/${id}`);
  };

  const onDeleteLocation = id => {
    const response = axios.delete(`/location/${id}`);
    getLocations();
  };

  return (
    <Container>
      <div className="admin-location">
        <div className="add-location-btn">
          <Button text="Add" onClick={onAddLocationClick} />
        </div>
        <Table
          onDeleteLocation={onDeleteLocation}
          onEditLocation={onEditLocationClick}
          head={[
            { key: '_id', text: 'ID' },
            { key: 'name', text: 'Name' },
            { key: 'delete', text: '', type: 'delete' },
            { key: 'edit', text: '', type: 'edit' },
          ]}
          data={locations}
        />
      </div>
    </Container>
  );
};

export default Locations;
