/* eslint-disable max-len */
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { PageStyle, Subtitle, Title } from '../styles/HomeStyles';
import { Container, SubscriptionImg } from '../styles/SubscriptionStyle';
import signatureImg from '../assets/signature.jpg';
import { getSignature } from '../services/API';
import scheduleDates from '../utils/ScheduleDates';
import formatDate from '../utils/formatDate';
import formatProductName from '../utils/formatProductName';

function SubDetails() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState('');
  const [nextDates, setNextDates] = useState('');

  useEffect(async () => {
    if (!user) {
      await Swal.fire({
        title: 'Login necessário',
        text: 'Para acessar essa rota, você precisa estar logado',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Fazer Login',
        denyButtonText: 'Ir para Home',
        confirmButtonColor: '#8C97EA',
        denyButtonColor: '#AAA',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/sign-in');
        } else {
          navigate('/');
        }
      });
    } else {
      getSignature(user.token)
        .then((res) => {
          setSubscription(res.data);
          setNextDates(scheduleDates(res.data.plan, res.data.delivery_date, res.data.signature_date));
        })
        .catch(async (err) => {
          if (err.response?.status === 404) {
            await Swal.fire({
              icon: 'error',
              title: 'Usuário não encontrado',
            });
            localStorage.removeItem('@user');
            setUser('');
            navigate('/sign-in');
          } else {
            await Swal.fire({
              icon: 'error',
              title: 'Houve um erro ao validar seu acesso a essa página, você será redirecionado',
            });
            localStorage.removeItem('@user');
            setUser('');
            navigate('/sign-in');
          }
        });
    }
  }, []);

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
          <span>{subscription.plan}</span>
        </SubsText>
        <SubsText>
          Data da assinatura:
          {' '}
          <span>{formatDate(subscription.signature_date)}</span>
        </SubsText>
        <SubsText>
          Próximas entregas:
        </SubsText>
        <NextDates>
          {nextDates[0]}
          <br />
          {nextDates[1]}
          <br />
          {nextDates[2]}
        </NextDates>
        <Products>
          {subscription.products?.map((product) => (<Product key={product}>{formatProductName(product)}</Product>))}
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
