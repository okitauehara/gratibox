/* eslint-disable max-len */
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
import Loading from '../utils/Loading';
import formatUsername from '../utils/formatUsername';
import * as S from '../styles/SubscriptionStyle';

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

  if (!subscription && !nextDates) {
    return (<Loading />);
  }
  return (
    <PageStyle style={{ marginBottom: '30px' }}>
      <Title>
        Bom te ver por aqui,
        {' '}
        {formatUsername(user?.name)}
      </Title>
      <Subtitle>“Agradecer é arte de atrair coisas boas”</Subtitle>
      <Container style={{ alignItems: 'flex-start' }}>
        <SubscriptionImg src={signatureImg} alt="Yoga Girl on Yellow Mat" style={{ margin: '0px auto' }} />
        <S.SubsText>
          Plano:
          {' '}
          <span>{subscription.plan}</span>
        </S.SubsText>
        <S.SubsText>
          Data da assinatura:
          {' '}
          <span>{formatDate(subscription.signature_date)}</span>
        </S.SubsText>
        <S.SubsText>
          Próximas entregas:
        </S.SubsText>
        <S.NextDates>
          {nextDates[0]}
          <br />
          {nextDates[1]}
          <br />
          {nextDates[2]}
        </S.NextDates>
        <S.Products>
          {subscription.products?.map((product) => (<S.Product key={product}>{formatProductName(product)}</S.Product>))}
        </S.Products>
      </Container>
    </PageStyle>
  );
}

export default SubDetails;
