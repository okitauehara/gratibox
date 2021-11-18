import styled from 'styled-components';
import { PageStyle, Redirect, Title } from '../styles/HomeStyles';

function SignUp() {
  return (
    <PageStyle>
      <Title>Bem vindo ao GratiBox</Title>
      <Form>
        <Input
          placeholder="Nome"
        />
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Senha"
        />
        <Input
          placeholder="Confirmar senha"
        />
        <Button>Cadastrar</Button>
      </Form>
      <Redirect>Já sou grato</Redirect>
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
