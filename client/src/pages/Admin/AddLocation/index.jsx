import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../../../components/Admin/Container';
import Button from '../../../components/Button';
import SectionTitle from '../../../components/SectionTitle';
import Input from '../../../components/Input';

import './add-location.css';

const AddLocation = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) getLocationById();
  }, []);

  const [location, setLocation] = useState({
    name: '',
  });

  const getLocationById = async () => {
    const response = await axios.get(`location/${id}`);
    setLocation({ ...location, ...response.data });
  };

  const onInputChange = (e, key) => {
    setLocation({ ...location, [key]: e.target.value });
  };

  const onAddLocation = async () => {
    const response = await axios.post('/location', location);

    toast.info('Location added, Redirecting...', {
      position: 'bottom-center',
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate('/admin/locations');
    }, 2000);
  };

  const onEditLocation = async () => {
    const response = await axios.patch(`/location/${id}`, location);

    toast.info('Location Edited, Redirecting...', {
      position: 'bottom-center',
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate('/admin/locations');
    }, 2000);
  };

  return (
    <Container>
      <div className="admin-add-locatiion">
        <SectionTitle title={id ? 'Edit Location' : 'Add Location'} />
        <div className="add-location-form">
          <Input
            value={location.name}
            className="input"
            label="Location"
            onChange={e => {
              onInputChange(e, 'name');
            }}
          />
        </div>
        <div className="add-btn">
          <Button text="Submit" onClick={id ? onEditLocation : onAddLocation} />
        </div>
      </div>

      <ToastContainer />
    </Container>
  );
};

export default AddLocation;
