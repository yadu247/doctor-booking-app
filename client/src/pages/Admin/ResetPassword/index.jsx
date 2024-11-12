// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Container from '../../../components/Admin/Container';
// import Button from '../../../components/Button';
// import SectionTitle from '../../../components/SectionTitle';
// import Input from '../../../components/Input';

// import './reset-password.css';

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   // const { id } = useParams();

//   const [adminPassword, setAdminPassword] = useState({
//     oldpassword: '',
//     password: '',
//     confirmpassword: '',
//   });

//   const onInputChange = (e, key) => {
//     setAdminPassword({ ...adminPassword, [key]: e.target.value });
//   };
//   console.log(adminPassword);

//   const onResetPasswordClick = async () => {
//     console.log('password changed');
//     navigate('/admin/profile');
//   };

//   return (
//     <Container>
//       <div className="admin-reset-password">
//         <SectionTitle title="Reset Password" />

//         <div className="reset-password-form">
//           <Input
//             label="Old Password"
//             onChange={e => {
//               onInputChange(e, 'oldpassword');
//             }}
//           />
//           <Input
//             label="New Password"
//             onChange={e => {
//               onInputChange(e, 'password');
//             }}
//           />
//           <Input
//             label="Confirm Password"
//             onChange={e => {
//               onInputChange(e, 'confirmpassword');
//             }}
//           />
//         </div>
//         <div className="reset-password-btn">
//           <Button text="Reset" onClick={onResetPasswordClick} />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ResetPassword;
