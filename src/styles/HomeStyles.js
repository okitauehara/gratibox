import styled from 'styled-components';

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
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;

const HomeImg = styled.img`
  width: 100vw;
  height: fit-content;
  background-color: #4D65A8;
  padding-bottom: 80px;
`;

const BackgroundColor = styled.div`
  width: 100vw;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4D65A8;
  position: absolute;
  bottom: 0px;
  left: 0px;
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

export {
  PageStyle,
  Title,
  Subtitle,
  HomeImg,
  BackgroundColor,
  Button,
  Redirect,
};
