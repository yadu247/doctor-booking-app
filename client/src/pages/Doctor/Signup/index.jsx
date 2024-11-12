import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    email: '',
    firstname: '',
    lastname: '',
    specialization: '',
    hospital: '',
    department: '',
  });
  console.log(signup);
  const [hospitals, setHospitals] = useState([]);
  const [departments, setDepartments] = useState([]);

  const onChangeSignupDetails = (e, key) => {
    setSignup({ ...signup, [key]: e.target.value });
  };

  const onLoginClick = () => {
    navigate('/doctor/login');
  };

  const onSignupClick = async () => {
    const response = await axios.post('/doctor/signup', signup);
    if (!response.data.error)
      toast.info('Signed up, Redirecting to login page...', {
        position: 'bottom-center',
        autoClose: 2000,
      });

    setTimeout(() => {
      if (!response.data.error) navigate('/doctor/login');
    }, 2000);
  };

  const getHospitals = async () => {
    const response = await axios.get('/hospital');
    const selectHospitals = response.data.map(item => {
      return { value: item.name, text: item.name };
    });
    setHospitals(selectHospitals);
  };

  const getDepartments = async () => {
    const response = await axios.get('/department');
    const selectDepartments = response.data.map(item => {
      return { value: item.name, text: item.name };
    });
    setDepartments(selectDepartments);
  };

  useEffect(() => {
    getDepartments();
    getHospitals();
  }, []);

  return (
    <div className="doctor-signup">
      <div className="signup-container">
        <div className="head">
          <img src="/logo.png" alt="Logo" />
          <div className="text">
            <h1>EasyDoc</h1>
            <span>Doctor Signup</span>
          </div>
        </div>

        <div className="inputs">
          <Input
            className="input"
            label="Email"
            onChange={e => onChangeSignupDetails(e, 'email')}
          />
          <Input
            className="input"
            label="First Name"
            onChange={e => onChangeSignupDetails(e, 'firstname')}
          />
          <Input
            className="input"
            label="Last Name"
            onChange={e => onChangeSignupDetails(e, 'lastname')}
          />
          <Input
            className="input"
            label="Specialization"
            onChange={e => onChangeSignupDetails(e, 'specialization')}
          />
          <Select
            value={signup.hospital}
            label="Hospital"
            options={hospitals}
            onChange={e => {
              onChangeSignupDetails(e, 'hospital');
            }}
          />
          <Select
            value={signup.department}
            label="Department"
            options={departments}
            onChange={e => {
              onChangeSignupDetails(e, 'department');
            }}
          />
          <div className="btn-container">
            <Button color="#5debe1" text="Login" onClick={onLoginClick} />
            <Button text="Signup" onClick={onSignupClick} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
