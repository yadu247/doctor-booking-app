import Button from '../../../components/Button';
import Container from '../../../components/Admin/Container';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';

import './profile.css';

const Profile = () => {
  const [id, setId] = useState(getId());
  const [adminData, setAdminData] = useState([]);

  // const navigate = useNavigate();

  const getAdminById = async () => {
    const response = await axios.get(`/admin/${id}`);
    setAdminData(response.data);
  };

  useEffect(() => {
    getAdminById();
  }, []);

  // const onEditAdminClick = id => {
  //   navigate(`/admin/edit-profile/`);
  // };
  return (
    <Container>
      <div className="admin-profile">
        <div className="profile-container">
          <img src={adminData.image} alt="Admin default image" />
          <div className="details-container">
            <div className="admin-details">
              <p className="admin-name">{adminData.role}</p>
              <p className="admin-email">{adminData.email}</p>
            </div>
            {/* <div className="btn-container">
              <Button
                onClick={onEditAdminClick}
                text={<i class="fas fa-edit"></i>}
              />
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
