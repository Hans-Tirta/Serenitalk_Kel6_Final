import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ContactUs from '../pages/ContactUs';
import Therapists from '../pages/Therapists/Therapists';
import TherapistDetails from '../pages/Therapists/TherapistDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/therapist-account/Dashboard';
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import PaymentPage from '../pages/PaymentPage';
import PaymentSuccess from '../pages/PaymentSuccess';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/therapists" element={<Therapists />} />
      <Route path="/therapists/:id" element={<TherapistDetails />} />
      <Route path="/payment/:id" element={<PaymentPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']} ><MyAccount /></ProtectedRoute>} />
      <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']} ><Dashboard /></ProtectedRoute>} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
    </Routes>
  );
};

export default Routers;