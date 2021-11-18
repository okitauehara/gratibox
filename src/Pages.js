import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Plans from './pages/Plans';
import SubDetails from './pages/SubDetails';
import Subscription from './pages/Subscription';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/subdetails" element={<SubDetails />} />
      <Route path="/subscription/:planId" element={<Subscription />} />
    </Routes>
  );
}

export default Pages;
