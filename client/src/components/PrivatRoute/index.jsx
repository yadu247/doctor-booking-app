import { getRole, isTokenValid } from '../../utils/authentication';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = props => {
  return isTokenValid() && getRole() == props.role ? (
    <Outlet />
  ) : (
    <Navigate to={props.path} />
  );
};

export default PrivateRoute;
