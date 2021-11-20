import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Container, ImgBox, PlanDescription, Button,
} from '../styles/PlansStyle';
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
        <Link to="/subscription-prefs/1">
          <Button>Assinar</Button>
        </Link>
      </Container>
      <Container>
        <ImgBox src={monthImg} alt="Yoga Girl In Her Bedroom" />
        <PlanDescription>
          Você recebe um box por mês.
          Ideal para quem está começando agora.
        </PlanDescription>
        <Link to="/subscription-prefs/2">
          <Button>Assinar</Button>
        </Link>
      </Container>
    </PageStyle>
  );
}

export default Plans;
