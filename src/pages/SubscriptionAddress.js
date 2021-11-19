/* eslint-disable max-len */
import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { PageStyle, Title, Subtitle } from '../styles/HomeStyles';
import * as S from '../styles/SubscriptionStyle';
import signatureImg from '../assets/signature.jpg';

function SubscriptionAddress() {
  const { user } = useContext(UserContext);

  return (
    <PageStyle style={{ marginBottom: '30px' }}>
      <Title>
        Bom te ver por aqui,
        {' '}
        {user?.name}
      </Title>
      <Subtitle>“Agradecer é arte de atrair coisas boas”</Subtitle>
      <S.Container>
        <S.SubscriptionImg src={signatureImg} alt="Yoga Girl on Yellow Mat" />
        <Instruction>
          Ao inserir o CEP, os campos de endereço serão preenchidos automaticamente.
          <br />
          <span>
            Não sabe seu CEP?
            {' '}
            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer">Consulte aqui</a>
          </span>
        </Instruction>
        <Input placeholder="Nome completo" />
        <Inline>
          <Input placeholder="CEP" />
          <Input placeholder="nº" />
        </Inline>
        <S.PlanBox>
          <S.Text>
            Endereço de entrega
          </S.Text>
        </S.PlanBox>
        <Inline>
          <S.PlanBox>
            <S.Text>
              Cidade
            </S.Text>
          </S.PlanBox>
          <S.PlanBox>
            <S.Text>
              Estado
            </S.Text>
          </S.PlanBox>
        </Inline>
      </S.Container>
      <S.Button>Finalizar</S.Button>
    </PageStyle>
  );
}

export default SubscriptionAddress;

const Inline = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #E0D1ED;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #4D65A8;
  padding: 10px;
  margin-bottom: 5px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #4D65A8;
    opacity: 0.7;
  }
`;

const Instruction = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #4D65A8;
  margin-bottom: 10px;

  & span {
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
  }

  & a {
    color: #4D65A8;
    text-decoration: underline;
  }
`;
