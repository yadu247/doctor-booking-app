import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';
import axios from '../../../utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const onChangeSignupDetails = (e, key) => {
    setSignup({ ...signup, [key]: e.target.value });
  };

  const onLoginClick = () => {
    navigate('/login');
  };

  const onSignupClick = async () => {
    const response = await axios.post('/user/signup', signup);
    if (!response.data.error)
      toast.info('Signed up, Redirecting to login page...', {
        position: 'bottom-center',
        autoClose: 2000,
      });

    setTimeout(() => {
      if (!response.data.error) navigate('/login');
    }, 2000);
  };
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="head">
          <img src="/logo.png" alt="Logo" />
          <div className="text">
            <h1>EasyDoc</h1>
            <span>User Signup</span>
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
            label="Password"
            type="password"
            onChange={e => onChangeSignupDetails(e, 'password')}
          />
          <Input
            className="input"
            label="Confirm Password"
            type="password"
            onChange={e => onChangeSignupDetails(e, 'confirmpassword')}
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
