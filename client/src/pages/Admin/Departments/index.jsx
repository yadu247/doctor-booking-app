import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Container from '../../../components/Admin/Container';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import axios from '../../../utils/axios';

import './departments.css';

const Departments = () => {
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    const response = await axios.get('/department');
    setDepartments(response.data);
  };

  const onAddDepartmentClick = () => {
    navigate('/admin/add-department');
  };

  const onEditDepartmentClick = id => {
    navigate(`/admin/edit-department/${id}`);
  };

  const onDeleteDepartment = id => {
    const response = axios.delete(`/department/${id}`);
    getDepartments();
  };

  return (
    <Container>
      <div className="admin-departments">
        <div className="add-department-btn">
          <Button text="Add" onClick={onAddDepartmentClick} />
        </div>
        <Table
          onEditDepartment={onEditDepartmentClick}
          onDeleteDepartment={onDeleteDepartment}
          head={[
            { key: '_id', text: 'ID' },
            { key: 'name', text: 'Name' },
            { key: 'about', text: 'About' },
            { key: 'image', text: 'Image', type: 'img', width: '100' },
            { key: 'delete', text: '', type: 'delete' },
            { key: 'edit', text: '', type: 'edit' },
          ]}
          data={departments}
        />
      </div>
    </Container>
  );
};

export default Departments;
