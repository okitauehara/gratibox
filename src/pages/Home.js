import { useNavigate } from 'react-router-dom';
import * as S from '../styles/HomeStyles';
import home from '../assets/home.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <S.PageStyle>
      <S.Title>Bem vindo ao GratiBox</S.Title>
      <S.Subtitle>
        Receba em casa um box com chás, produtos orgânicos, incensos e muito mais...
      </S.Subtitle>
      <S.HomeImg src={home} alt="Yoga Girl" />
      <S.BackgroundColor>
        <S.Button onClick={() => navigate('/sign-up')}>Quero começar</S.Button>
        <S.Redirect onClick={() => navigate('/sign-in')}>Já sou grato</S.Redirect>
      </S.BackgroundColor>
    </S.PageStyle>
  );
}

export default Home;
