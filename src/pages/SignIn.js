import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../contexts/UserContext';
import { postSignIn } from '../services/API';
import { Forms, Input, Button } from '../styles/AccessStyle';
import { PageStyle, Title, Redirect } from '../styles/HomeStyles';

function SignIn() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      if (user.planId) {
        navigate('/subdetails');
      } else {
        navigate('/plans');
      }
    }
  }, [user]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const success = (res) => {
    setUser(res.data);
    localStorage.setItem('@user', JSON.stringify(res.data));
    setIsDisabled(false);
  };

  const error = (err) => {
    if (err.response?.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Verifique se todos os dados inseridos são válidos',
      });
      setIsDisabled(false);
    } else if (err.response?.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Email ou senha não encontrados',
      });
      setIsDisabled(false);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Tivemos um problema no servidor, tente novamente mais tarde',
      });
      setIsDisabled(false);
    }
  };

  const submitSignIn = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    const body = values;
    postSignIn(body)
      .then(success)
      .catch(error);
  };

  return (
    <PageStyle>
      <Title>Bem vindo ao GratiBox</Title>
      <Forms onSubmit={submitSignIn}>
        <Input
          required
          placeholder="E-mail"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          disabled={isDisabled}
        />
        <Input
          required
          placeholder="Senha"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          disabled={isDisabled}
        />
        <Button type="submit" disabled={isDisabled}>Login</Button>
      </Forms>
      <Link to="/sign-up" style={{ pointerEvents: isDisabled ? 'none' : 'all', color: '#FFFFFF' }}>
        <Redirect>Ainda não sou grato</Redirect>
      </Link>
    </PageStyle>
  );
}

export default SignIn;
