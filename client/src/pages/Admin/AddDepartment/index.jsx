import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../../../components/Admin/Container';
import Button from '../../../components/Button';
import SectionTitle from '../../../components/SectionTitle';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import './add-department.css';

const AddDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) getDepartmentById();
  }, []);

  const [department, setDepartment] = useState({
    name: '',
    image: '',
    about: '',
  });

  const getDepartmentById = async () => {
    const response = await axios.get(`department/${id}`);
    setDepartment({ ...department, ...response.data });
  };

  const [imageName, setImageName] = useState('');

  const onInputChange = (e, key) => {
    setDepartment({ ...department, [key]: e.target.value });
  };

  const onImageInputChange = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const response = await axios.post('/image', formData);
    setDepartment({ ...department, image: response.data.url });
    setImageName(response.data.url.split('/')[4]);
  };

  const onAddDepartment = async () => {
    const response = await axios.post('/department', department);

    toast.info('Department added, Redirecting...', {
      position: 'bottom-center',
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate('/admin/departments');
    }, 2000);
  };

  const onEditDepartment = async () => {
    const response = await axios.patch(`/department/${id}`, department);

    toast.info('Department Edited, Redirecting...', {
      position: 'bottom-center',
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate('/admin/departments');
    }, 2000);
  };

  const onDeleteImageBtnClick = async () => {
    let image = '';
    if (id) {
      image = department.image.split('/')[4];
    }
    const response = await axios.delete(`/image/${id ? image : imageName}`);
    setDepartment({ ...department, image: '' });
  };

  return (
    <Container>
      <div className="admin-add-department">
        <SectionTitle title={id ? 'Edit Department' : 'Add Department'} />
        <div className="add-department-form">
          <div className="left">
            <Input
              value={department.name}
              label="Name"
              onChange={e => {
                onInputChange(e, 'name');
              }}
            />
            <Input
              label="Image"
              type="file"
              onChange={e => {
                onImageInputChange(e, 'image');
              }}
            />
            <div
              style={{ display: department.image ? 'block' : 'none' }}
              className="department-image-container"
            >
              <img src={department.image} alt="Department image" />
              <button
                style={{ display: department.image ? 'inline' : 'none' }}
                className="delete-image"
                onClick={onDeleteImageBtnClick}
              >
                X
              </button>
            </div>
          </div>
          <div className="right">
            <Textarea
              value={department.about}
              label="About"
              rows={6}
              onChange={e => {
                onInputChange(e, 'about');
              }}
            />
          </div>
        </div>
        <div className="add-btn">
          <Button
            text="Submit"
            onClick={id ? onEditDepartment : onAddDepartment}
          />
        </div>
      </div>

      <ToastContainer />
    </Container>
  );
};

export default AddDepartment;
