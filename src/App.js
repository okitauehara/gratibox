/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Pages from './Pages';
import UserContext from './contexts/UserContext';
import SignatureContext from './contexts/SignatureContext';

function App() {
  const userData = JSON.parse(localStorage.getItem('@user'));
  const [user, setUser] = useState(userData);
  const [values, setValues] = useState({
    delivery_date: '', products: '', cep: '', number: '', full_name: '',
  });
  const [cepData, setCepData] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SignatureContext.Provider value={{
        values, setValues, cepData, setCepData,
      }}
      >
        <Router>
          <GlobalStyle />
          <Pages />
        </Router>
      </SignatureContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
