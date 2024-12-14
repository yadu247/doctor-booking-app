import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivatRoute';

import Dashboard from './pages/User/Dashboard';
import Locations from './pages/User/Locations';
import Hospitals from './pages/User/Hospitals';
import Departments from './pages/User/Departments';
import Doctors from './pages/User/Doctors';
import Doctor from './pages/User/Doctor';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import ShowAppointments from './pages/User/Appointments';
import BookSlots from './pages/User/BookSlots';
import ShowPrescriptions from './pages/User/Prescriptions';

import AdminDashboard from './pages/Admin/Dashboard';
import AdminDepartments from './pages/Admin/Departments';
import AdminAddDepartment from './pages/Admin/AddDepartment';
import AdminHospitals from './pages/Admin/Hospitals';
import AdminAddHospital from './pages/Admin/AddHospital';
import AdminDoctors from './pages/Admin/Doctors';
import AdminLocations from './pages/Admin/Locations';
import AdminAddLocation from './pages/Admin/AddLocation';
import AdminProfile from './pages/Admin/Profile';
import AdminLogin from './pages/Admin/Login';
import AdminSignup from './pages/Admin/Signup';
// import AdminForgotPassword from './pages/Admin/ForgotPassword';
// import AdminForgotPasswordReset from './pages/Admin/ForgotPasswordReset';
// import AdminEditProfile from './pages/Admin/EditProfile';
// import AdminResetPassword from './pages/Admin/ResetPassword';

import DoctorLogin from './pages/Doctor/Login';
import DoctorSignup from './pages/Doctor/Signup';
import DoctorDashboard from './pages/Doctor/Dashboard';
import DoctorSlots from './pages/Doctor/Slots';
import DoctorAddSlots from './pages/Doctor/AddSlots';
import DoctorAppointments from './pages/Doctor/Appointments';
import DoctorAddPrescription from './pages/Doctor/AddPrescription';
import DoctorPrescriptions from './pages/Doctor/Prescriptions';
import DoctorForgotPassword from './pages/Doctor/ForgotPassword';
import DoctorForgotPasswordReset from './pages/Doctor/ForgotPasswordReset';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoute role="USER" path="/login" />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/hospitals/:location" element={<Hospitals />} />
        <Route path="/departments/:hospitalid" element={<Departments />} />
        <Route path="/doctors/:hospitaldepartmentid" element={<Doctors />} />
        <Route path="/doctor/:doctorid" element={<Doctor />} />
        <Route path="/book-slots/:doctorId" element={<BookSlots />} />
        <Route path="/appointments" element={<ShowAppointments />} />
        <Route
          path="/prescriptions/:appointmentId"
          element={<ShowPrescriptions />}
        />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/signup" element={<AdminSignup />} />
      {/* <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route
        path="/admin/forgot-password-reset/:token"
        element={<AdminForgotPasswordReset />}
      /> */}
      <Route
        path="/admin"
        element={<PrivateRoute role="ADMIN" path="/admin/login" />}
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/departments" element={<AdminDepartments />} />
        <Route path="/admin/add-department" element={<AdminAddDepartment />} />
        <Route
          path="/admin/edit-department/:id"
          element={<AdminAddDepartment />}
        />
        <Route path="/admin/hospitals" element={<AdminHospitals />} />
        <Route path="/admin/add-hospital" element={<AdminAddHospital />} />
        <Route path="/admin/edit-hospital/:id" element={<AdminAddHospital />} />
        <Route path="/admin/doctors" element={<AdminDoctors />} />
        <Route path="/admin/locations" element={<AdminLocations />} />
        <Route path="/admin/add-location" element={<AdminAddLocation />} />
        <Route path="/admin/edit-location/:id" element={<AdminAddLocation />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        {/* <Route path="/admin/edit-profile" element={<AdminEditProfile />} /> */}
        {/* <Route path="/admin/reset-password" element={<AdminResetPassword />} /> */}
      </Route>

      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/doctor/signup" element={<DoctorSignup />} />
      <Route
        path="/doctor/forgot-password"
        element={<DoctorForgotPassword />}
      />
      <Route
        path="/doctor/forgot-password-reset/:token"
        element={<DoctorForgotPasswordReset />}
      />
      <Route
        path="/doctor"
        element={<PrivateRoute role="DOCTOR" path="/doctor/login" />}
      >
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/slots" element={<DoctorSlots />} />
        <Route path="/doctor/add-slots" element={<DoctorAddSlots />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route
          path="/doctor/add-prescription/:appointmentAndUserId"
          element={<DoctorAddPrescription />}
        />
        <Route path="/doctor/prescriptions" element={<DoctorPrescriptions />} />
      </Route>
    </Routes>
  );
};

export default App;
