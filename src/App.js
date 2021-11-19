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
    date: '', teas: false, incense: false, organics: false, cep: '', number: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SignatureContext.Provider value={{ values, setValues }}>
        <Router>
          <GlobalStyle />
          <Pages />
        </Router>
      </SignatureContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
