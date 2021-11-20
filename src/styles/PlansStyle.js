import styled from 'styled-components';

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

export {
  Container,
  ImgBox,
  PlanDescription,
  Button,
};
