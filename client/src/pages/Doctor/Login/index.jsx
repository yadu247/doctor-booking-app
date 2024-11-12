import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';
import axios from '../../../utils/axios';

import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' });

  const onChangeLoginDetails = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const onLoginClick = async () => {
    const response = await axios.post('/doctor/login', login);

    localStorage.setItem('token', response.data.token);
    navigate('/doctor/dashboard');
  };

  const onSignupClick = () => {
    navigate('/doctor/signup');
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="head">
          <img src="/logo.png" alt="Logo" />
          <div className="text">
            <h1>EasyDoc</h1>
            <span>Doctor Login</span>
          </div>
        </div>

        <div className="inputs">
          <Input
            className="input"
            label="Email"
            onChange={e => onChangeLoginDetails(e, 'email')}
          />
          <Input
            className="input"
            label="Password"
            type="password"
            onChange={e => onChangeLoginDetails(e, 'password')}
          />
          <div className="btn-container">
            <Button color="#5debe1" text="Signup" onClick={onSignupClick} />
            <Button text="Login" onClick={onLoginClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
