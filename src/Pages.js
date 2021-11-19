import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Plans from './pages/Plans';
import SubDetails from './pages/SubDetails';
import SubscriptionPrefs from './pages/SubscriptionPrefs';
import SubscriptionAddress from './pages/SubscriptionAddress';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/subdetails" element={<SubDetails />} />
      <Route path="/subscription-prefs/:planId" element={<SubscriptionPrefs />} />
      <Route path="/subscription-address/:planId" element={<SubscriptionAddress />} />
    </Routes>
  );
}

export default Pages;
