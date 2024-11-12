import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import SectionTitle from '../../../components/SectionTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './forgot-password.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onSendClick = async () => {
    const response = await axios.post('/admin/forgot-password', {
      email: email,
    });

    if (!response.data.error)
      toast.info('Email sent, Check your inbox', {
        position: 'bottom-center',
        autoClose: 2000,
      });

    setTimeout(() => {
      if (!response.data.error) navigate('/admin/login');
    }, 2000);
  };

  return (
    <div className="admin-forgot-password">
      <SectionTitle title="Forgot Password" />
      <Input
        label="Email"
        onChange={e => {
          onChangeEmail(e);
        }}
      />
      <div className="btn-container">
        <Button text="Send Link" onClick={onSendClick} />
      </div>

      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
