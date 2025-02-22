import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';
import axios from '../../../utils/axios';
import { Link } from 'react-router-dom';

import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' });

  const onChangeLoginDetails = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const onLoginClick = async () => {
    const response = await axios.post('/user/login', login);

    localStorage.setItem('token', response.data.token);
    navigate('/dashboard');
  };

  const onSignupClick = () => {
    navigate('/signup');
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="head">
          <img src="/logo.png" alt="Logo" />
          <div className="text">
            <h1>EasyDoc</h1>
            <span>User Login</span>
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
          <Link className="forgot-password" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
