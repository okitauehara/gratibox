import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { PageStyle, Subtitle, Title } from '../styles/HomeStyles';
import { Container, SubscriptionImg } from '../styles/SubscriptionStyle';
import signatureImg from '../assets/signature.jpg';

function SubDetails() {
  const { user } = useContext(UserContext);

  return (
    <PageStyle style={{ marginBottom: '30px' }}>
      <Title>
        Bom te ver por aqui,
        {' '}
        {user?.name}
      </Title>
      <Subtitle>“Agradecer é arte de atrair coisas boas”</Subtitle>
      <Container style={{ alignItems: 'flex-start' }}>
        <SubscriptionImg src={signatureImg} alt="Yoga Girl on Yellow Mat" style={{ margin: '0px auto' }} />
        <SubsText>
          Plano:
          {' '}
          <span>Mensal</span>
        </SubsText>
        <SubsText>
          Data da assinatura:
          {' '}
          <span>19/11/2021</span>
        </SubsText>
        <SubsText>
          Próximas entregas:
        </SubsText>
        <NextDates>
          dd/mm/aaaa
          <br />
          dd/mm/aaaa
          <br />
          dd/mm/aaaa
        </NextDates>
        <Products>
          <Product>Chás</Product>
          <Product>Produtos orgânicos</Product>
          <Product>Incensos</Product>
        </Products>
      </Container>
    </PageStyle>
  );
}

export default SubDetails;

const SubsText = styled.p`
  font-size: 18px;
  color: #4D65A8;

  & span {
    color: #E63C80;
  }
`;

const NextDates = styled.p`
  font-size: 18px;
  color: #E63C80;
  padding-left: 30px;
`;

const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Product = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #E63C80;
  margin-top: 15px;
`;
