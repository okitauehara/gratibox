import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Forms, Input, Button } from '../styles/AccessStyle';
import { PageStyle, Title, Redirect } from '../styles/HomeStyles';

function SignIn() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submitSignIn = (event) => {
    event.preventDefault();
    setIsDisabled(true);
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
