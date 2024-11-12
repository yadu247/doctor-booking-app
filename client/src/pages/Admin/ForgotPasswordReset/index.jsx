import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './forgot-password-reset.css';

const ForgotPasswordReset = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onChangePassword = (e, key) => {
    setPassword({ ...password, [key]: e.target.value });
  };

  const onChangeClick = async () => {
    const response = await axios.post('/admin/reset-password', {
      ...password,
      token,
    });
    if (!response.data.error)
      toast.info('Password Changed, Login again', {
        position: 'bottom-center',
        autoClose: 2000,
      });

    setTimeout(() => {
      if (!response.data.error) navigate('/admin/login');
    }, 2000);
  };

  return (
    <div className="admin-forgot-password-reset">
      <SectionTitle title="Reset Password" />
      <Input
        label="Email"
        onChange={e => {
          onChangePassword(e, 'email');
        }}
      />
      <Input
        label="New Password"
        onChange={e => {
          onChangePassword(e, 'password');
        }}
      />
      <Input
        label="Confirm Password"
        onChange={e => {
          onChangePassword(e, 'confirmPassword');
        }}
      />
      <div className="btn-container">
        <Button text="Change Password" onClick={onChangeClick} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPasswordReset;
