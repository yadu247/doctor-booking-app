import Container from '../../../components/Admin/Container';
import { useNavigate } from 'react-router-dom';

import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToPage = key => {
    navigate(`/admin/${key}`);
  };

  return (
    <Container>
      <div className="admin-dashboard">
        <div className="options-container">
          <div
            onClick={() => {
              goToPage('hospitals');
            }}
            className="hospitals grid-item"
          >
            <p>
              <i class="fa-regular fa-hospital"></i>
              Hospitals
            </p>
          </div>
          <div
            onClick={() => {
              goToPage('departments');
            }}
            className="departments grid-item"
          >
            <p>
              <i class="fa-regular fa-building"></i>
              Departments
            </p>
          </div>
          <div
            onClick={() => {
              goToPage('doctors');
            }}
            className="doctors grid-item"
          >
            <p>
              <i class="fa-solid fa-user-doctor"></i>
              Doctors
            </p>
          </div>
          <div
            onClick={() => {
              goToPage('locations');
            }}
            className="locations grid-item"
          >
            <p>
              <i class="fa-solid fa-location-dot"></i>
              Locations
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
