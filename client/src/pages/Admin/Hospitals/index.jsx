import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Container from '../../../components/Admin/Container';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import axios from '../../../utils/axios';

import './hospitals.css';

const Hospitals = () => {
  const navigate = useNavigate();

  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    getHospitals();
  }, []);

  const getHospitals = async () => {
    const response = await axios.get('/hospital');
    setHospitals(response.data);
  };

  const onAddHospitalClick = () => {
    navigate('/admin/add-hospital');
  };

  const onEditHospitalClick = id => {
    navigate(`/admin/edit-hospital/${id}`);
  };

  const onDeleteHospital = id => {
    const response = axios.delete(`/hospital/${id}`);
    getHospitals();
  };

  return (
    <Container>
      <div className="admin-hospitals">
        <div className="add-hospitals-btn">
          <Button text="Add" onClick={onAddHospitalClick} />
        </div>
        <Table
          onDeleteHospital={onDeleteHospital}
          onEditHospital={onEditHospitalClick}
          head={[
            { key: '_id', text: 'ID' },
            { key: 'name', text: 'Name' },
            { key: 'about', text: 'About' },
            { key: 'image', text: 'Image', type: 'img', width: '100' },
            { key: 'location', text: 'Location' },
            { key: 'contactnumber', text: 'Contact' },
            { key: 'department', text: 'Department' },
            { key: 'delete', text: '', type: 'delete' },
            { key: 'edit', text: '', type: 'edit' },
          ]}
          data={hospitals}
        />
      </div>
    </Container>
  );
};

export default Hospitals;
