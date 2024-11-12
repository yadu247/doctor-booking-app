import Container from '../../../components/Admin/Container';
import { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import Table from '../../../components/Table';

import './doctors.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    const response = await axios.get('/doctor');
    setDoctors(response.data);
  };

  console.log(doctors);
  return (
    <Container>
      <div className="admin-doctors">
        <Table
          head={[
            { key: '_id', text: 'ID' },
            { key: 'firstname', text: 'First Name' },
            { key: 'lastname', text: 'Last Name' },
            { key: 'specialization', text: 'Specialization' },
            { key: 'hospital', text: 'Hospital' },
            { key: 'department', text: 'Department' },
            { key: 'about', text: 'About' },
            { key: 'image', text: 'Image', type: 'img', width: '100' },
          ]}
          data={doctors}
        />
      </div>
    </Container>
  );
};

export default Doctors;
