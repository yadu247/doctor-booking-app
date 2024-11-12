// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from '../../../utils/axios';
// import Container from '../../../components/Admin/Container';
// import Button from '../../../components/Button';
// import SectionTitle from '../../../components/SectionTitle';
// import Input from '../../../components/Input';

// import './edit-profile.css';

// const EditProfile = () => {
//   const navigate = useNavigate();
//   // const { id } = useParams();

//   // useEffect(() => {
//   //   if (id) getAdminById();
//   // }, []);

//   const [admin, setAdmin] = useState({
//     email: '',
//     image: '',
//     password: '',
//   });

//   const [imageName, setImageName] = useState('');

//   // const getAdminById = async () => {
//   //   const response = await axios.get(`admin/${id}`);
//   //   setAdmin({ ...admin, ...response.data });
//   // };

//   const onInputChange = (e, key) => {
//     setAdmin({ ...admin, [key]: e.target.value });
//   };

//   const onImageInputChange = async e => {
//     const formData = new FormData();
//     formData.append('image', e.target.files[0]);
//     const response = await axios.post('/image', formData);
//     setAdmin({ ...admin, image: response.data.url });
//     setImageName(response.data.url.split('/')[4]);
//   };

//   const onEditAdmin = async () => {
//     // const response = await axios.patch(`/admin/${id}`, admin);
//     console.log('edited');
//     navigate('/admin/profile');
//   };

//   const onResetPasswordClick = () => {
//     navigate(`/admin/reset-password/`);
//   };

//   const onDeleteImageBtnClick = async () => {
//     let image = '';
//     if (id) {
//       image = hospital.image.split('/')[4];
//     }
//     const response = await axios.delete(`/image/${id ? image : imageName}`);
//     setAdmin({ ...admin, image: '' });
//   };

//   return (
//     <Container>
//       <div className="admin-edit-profile">
//         <SectionTitle title="Edit Profile" />
//         <div className="reset-password-btn-container">
//           <Button text="Reset Password" onClick={onResetPasswordClick} />
//         </div>

//         <div className="edit-profile-form">
//           <Input
//             value={admin.email}
//             label="Email"
//             onChange={e => {
//               onInputChange(e, 'email');
//             }}
//           />

//           <Input
//             label="Image"
//             type="file"
//             onChange={e => {
//               onImageInputChange(e, 'image');
//             }}
//           />
//           <div
//             style={{ display: admin.image ? 'block' : 'none' }}
//             className="admin-image-container"
//           >
//             <img src={admin.image} alt="Admin image" />
//             <button
//               style={{ display: admin.image ? 'inline' : 'none' }}
//               className="delete-image"
//               onClick={onDeleteImageBtnClick}
//             >
//               X
//             </button>
//           </div>
//         </div>
//         <div className="edit-btn">
//           <Button text="Submit" onClick={onEditAdmin} />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default EditProfile;
