import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PageStyle, Redirect, Title } from '../styles/HomeStyles';
import { postSignUp } from '../services/API';
import { Forms, Input, Button } from '../styles/AccessStyle';

function SignUp() {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(false);
  const emailRegex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const success = async () => {
    await Swal.fire({
      icon: 'success',
      title: 'Usuário cadastrado!',
    });
    setIsDisabled(false);
    navigate('/sign-in');
  };

  const error = (err) => {
    if (err.response.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Verifique se todos os dados inseridos são válidos',
      });
    }
    if (err.response.status === 409) {
      Swal.fire({
        icon: 'error',
        title: 'O e-mail inserido já está em uso',
      });
    }
    setIsDisabled(false);
  };

  const submitSignUp = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    const body = values;
    postSignUp(body)
      .then(success)
      .catch(error);
  };

  return (
    <PageStyle>
      <Title>Bem vindo ao GratiBox</Title>
      <Forms onSubmit={submitSignUp}>
        <Input
          required
          placeholder="Nome"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          minLength="3"
          autoFocus
          disabled={isDisabled}
          validation
          autoComplete="off"
        />
        <Input
          required
          placeholder="E-mail"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          pattern={emailRegex}
          disabled={isDisabled}
          validation
          autoComplete="off"
        />
        <Input
          required
          placeholder="Senha"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          minLength="8"
          disabled={isDisabled}
          validation
        />
        <Input
          required
          placeholder="Confirmar senha"
          type="password"
          pattern={values.password}
          disabled={isDisabled}
          validation
        />
        <Button type="submit" disabled={isDisabled}>Cadastrar</Button>
      </Forms>
      <Link to="/sign-in" style={{ pointerEvents: isDisabled ? 'none' : 'all', color: '#FFFFFF' }}>
        <Redirect>Já sou grato</Redirect>
      </Link>
    </PageStyle>
  );
}

export default SignUp;
