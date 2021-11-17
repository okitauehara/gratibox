import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import home from '../assets/home.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <PageStyle>
      <Title>Bem vindo ao GratiBox</Title>
      <Subtitle>
        Receba em casa um box com chás, produtos organicos, incensos e muito mais...
      </Subtitle>
      <HomeImg src={home} alt="Yoga Girl" />
      <BackgroundColor>
        <Button onClick={() => navigate('/sign-up')}>Quero começar</Button>
        <Redirect onClick={() => navigate('/sign-in')}>Já sou grato</Redirect>
      </BackgroundColor>
    </PageStyle>
  );
}

export default Home;

const PageStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 30px 0px 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 45px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;

const HomeImg = styled.img`
  width: 100vw;
  height: fit-content;
`;

const BackgroundColor = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4D65A8;
`;

const Button = styled.button`
  width: calc(100% - 60px);
  height: 45px;
  background-color: #8C97EA;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  border: none;
  border-radius: 10px;
  margin: 15px 85px;
`;

const Redirect = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 32px;
`;
