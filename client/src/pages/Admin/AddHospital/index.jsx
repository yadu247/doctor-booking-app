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
import Select from '../../../components/Select';
import MultiSelect from '../../../components/MultiSelect';

import './add-hospital.css';

const AddHospital = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) getHospitalById();
  }, []);

  const [hospital, setHospital] = useState({
    name: '',
    image: '',
    about: '',
    contactnumber: '',
    location: '',
    department: [],
  });

  const [selectedDepartmentName, setSelectedDepartmentName] = useState([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState([]);

  const [imageName, setImageName] = useState('');
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);

  const getHospitalById = async () => {
    const response = await axios.get(`hospital/${id}`);
    setHospital({ ...hospital, ...response.data });
    const departmentNames = response.data.department.map(item => item.name);
    const departmentIds = response.data.department.map(item => item._id);

    setSelectedDepartmentName([...selectedDepartmentName, ...departmentNames]);
    setSelectedDepartmentId([...selectedDepartmentId, ...departmentIds]);
  };

  const onInputChange = (e, key) => {
    if (key == 'department') setHospital({ ...hospital, [key]: e });
    else setHospital({ ...hospital, [key]: e.target.value });
  };

  const onImageInputChange = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const response = await axios.post('/image', formData);
    setHospital({ ...hospital, image: response.data.url });
    setImageName(response.data.url.split('/')[4]);
  };

  const onAddHospital = async () => {
    const response = await axios.post('/hospital', hospital);

    toast.info('Hospital added, Redirecting...', {
      position: 'bottom-center',
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate('/admin/hospitals');
    }, 2000);
  };

  const onEditHospital = async () => {
    const response = await axios.patch(`/hospital/${id}`, hospital);

    toast.info('Hospital Edited, Redirecting...', {
      position: 'bottom-center',
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate('/admin/hospitals');
    }, 2000);
  };

  const onDeleteImageBtnClick = async () => {
    let image = '';
    if (id) {
      image = hospital.image.split('/')[4];
    }
    const response = await axios.delete(`/image/${id ? image : imageName}`);
    setHospital({ ...hospital, image: '' });
  };

  useEffect(() => {
    getDepartments();
    getLocations();
  }, []);

  const getDepartments = async () => {
    const response = await axios.get('/department');

    const selectDepartments = response.data.map(item => {
      return { value: item._id, text: item.name };
    });

    setDepartments(selectDepartments);
  };

  const getLocations = async () => {
    const response = await axios.get('/location');
    const selectLocations = response.data.map(item => {
      return { value: item.name, text: item.name };
    });

    setLocations(selectLocations);
  };

  return (
    <Container>
      <div className="admin-add-hospital">
        <SectionTitle title={id ? 'Edit Hospital' : 'Add Hospital'} />
        <div className="add-hospital-form">
          <div className="left">
            <Input
              value={hospital.name}
              label="Name"
              onChange={e => {
                onInputChange(e, 'name');
              }}
            />
            <Input
              value={hospital.contactnumber}
              label="Contact Number"
              onChange={e => {
                onInputChange(e, 'contactnumber');
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
              style={{ display: hospital.image ? 'block' : 'none' }}
              className="hospital-image-container"
            >
              <img src={hospital.image} alt="Hospital image" />
              <button
                style={{ display: hospital.image ? 'inline' : 'none' }}
                className="delete-image"
                onClick={onDeleteImageBtnClick}
              >
                X
              </button>
            </div>
          </div>
          <div className="right">
            <Textarea
              value={hospital.about}
              label="About"
              rows={6}
              onChange={e => {
                onInputChange(e, 'about');
              }}
            />
            <Select
              value={hospital.location}
              label="Location"
              options={locations}
              onChange={e => {
                onInputChange(e, 'location');
              }}
            />
            <MultiSelect
              selectedTextData={selectedDepartmentName}
              selectedValueData={selectedDepartmentId}
              label="Departments"
              options={departments}
              onChange={e => {
                onInputChange(e, 'department');
              }}
            />
          </div>
        </div>
        <div className="add-btn">
          <Button text="Submit" onClick={id ? onEditHospital : onAddHospital} />
        </div>
      </div>

      <ToastContainer />
    </Container>
  );
};

export default AddHospital;
