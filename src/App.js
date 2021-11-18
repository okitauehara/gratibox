/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Pages from './Pages';
import UserContext from './contexts/UserContext';

function App() {
  const userData = JSON.parse(localStorage.getItem('@user'));
  const [user, setUser] = useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <GlobalStyle />
        <Pages />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
