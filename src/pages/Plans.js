import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PageStyle, Subtitle, Title } from '../styles/HomeStyles';
import weekImg from '../assets/week_plan.jpg';
import monthImg from '../assets/month_plan.jpg';
import UserContext from '../contexts/UserContext';

function Plans() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

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
    }
  }, []);

  return (
    <PageStyle style={{ marginBottom: '30px' }}>
      <Title>
        Bom te ver por aqui,
        {' '}
        {user?.name}
      </Title>
      <Subtitle>Você ainda não assinou um plano, que tal começar agora?</Subtitle>
      <Container>
        <ImgBox src={weekImg} alt="Yoga Girl With Plants" />
        <PlanDescription>
          Você recebe um box por semana.
          Ideal para quem quer exercer a gratidão todos os dias.
        </PlanDescription>
        <Link to="/subscription/1">
          <Button>Assinar</Button>
        </Link>
      </Container>
      <Container>
        <ImgBox src={monthImg} alt="Yoga Girl In Her Bedroom" />
        <PlanDescription>
          Você recebe um box por mês.
          Ideal para quem está começando agora.
        </PlanDescription>
        <Link to="/subscription/2">
          <Button>Assinar</Button>
        </Link>
      </Container>
    </PageStyle>
  );
}

export default Plans;

const Container = styled.article`
  width: calc(100vw - 60px);
  background-color: #E5CDB3;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 25px;
`;

const ImgBox = styled.img`
  width: fit-content;
  height: 200px;
`;

const PlanDescription = styled.p`
  font-size: 18px;
  color: #4D65A8;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 50vw;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #8C97EA;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
`;
