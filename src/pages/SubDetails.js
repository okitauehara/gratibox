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

  console.log(subscription);
  console.log(nextDates);

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
