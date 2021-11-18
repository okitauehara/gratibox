import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageStyle, Redirect, Title } from '../styles/HomeStyles';

function SignUp() {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(false);
  const emailRegex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submitSignUp = (event) => {
    event.preventDefault();
    setIsDisabled(true);
  };

  return (
    <PageStyle>
      <Title>Bem vindo ao GratiBox</Title>
      <Form onSubmit={submitSignUp}>
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
      </Form>
      <Link to="/sign-in" style={{ pointerEvents: isDisabled ? 'none' : 'all', color: '#FFFFFF' }}>
        <Redirect>Já sou grato</Redirect>
      </Link>
    </PageStyle>
  );
}

export default SignUp;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: calc(100vw - 60px);
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #604848;
  outline: none;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 20px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    color: #C5C5C5;
  }

  &:valid {
    background-color: ${(props) => (props.validation ? '#DDFADA' : '#FFFFFF')};
  }
`;

const Button = styled.button`
  width: calc(100vw - 60px);
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #8C97EA;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #FFFFFF;
  margin-top: 60px;
  margin-bottom: 20px;
`;
