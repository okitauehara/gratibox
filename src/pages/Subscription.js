import styled from 'styled-components';
import { TiArrowDown } from 'react-icons/ti';
import { PageStyle, Subtitle, Title } from '../styles/HomeStyles';
import signatureImg from '../assets/signature.jpg';

function Subscription() {
  return (
    <PageStyle>
      <Title>Bom te ver por aqui, @User.</Title>
      <Subtitle>“Agradecer é arte de atrair coisas boas”</Subtitle>
      <Container>
        <SubscriptionImg src={signatureImg} alt="Yoga Girl on Yellow Mat" />
        <DropdownBox>
          <Visible>
            <Text>Plano</Text>
            <ArrowDown />
          </Visible>
        </DropdownBox>
        <Expanded>
          <div>
            <Check type="radio" id="monthly" />
            <Label htmlFor="monthly">Mensal</Label>
          </div>
          <div>
            <Check type="radio" id="weekly" />
            <Label htmlFor="weekly">Semanal</Label>
          </div>
        </Expanded>
        <DropdownBox>
          <Visible>
            <Text>Entrega</Text>
            <ArrowDown />
          </Visible>
        </DropdownBox>
        <DropdownBox>
          <Visible>
            <Text>Quero receber</Text>
            <ArrowDown />
          </Visible>
        </DropdownBox>
        <Expanded>
          <div>
            <Check type="checkbox" id="teas" />
            <Label htmlFor="teas">Chás</Label>
          </div>
          <div>
            <Check type="checkbox" id="incense" />
            <Label htmlFor="incense">Incensos</Label>
          </div>
          <div>
            <Check type="checkbox" id="organics" />
            <Label htmlFor="organics">Produtos Orgânicos</Label>
          </div>
        </Expanded>
      </Container>
      <Button>Próximo</Button>
    </PageStyle>
  );
}

function weeklyPlan() {
  return (
    <Expanded>
      <div>
        <Check type="radio" id="monday" />
        <Label htmlFor="monday">Segunda-feira</Label>
      </div>
      <div>
        <Check type="radio" id="wednesday" />
        <Label htmlFor="wednesday">Quarta-feira</Label>
      </div>
      <div>
        <Check type="radio" id="friday" />
        <Label htmlFor="friday">Sexta-feira</Label>
      </div>
    </Expanded>
  );
}

function monthlyPlan() {
  return (
    <Expanded>
      <div>
        <Check type="radio" id="01" />
        <Label htmlFor="01">Dia 01</Label>
      </div>
      <div>
        <Check type="radio" id="10" />
        <Label htmlFor="10">Dia 10</Label>
      </div>
      <div>
        <Check type="radio" id="20" />
        <Label htmlFor="20">Dia 20</Label>
      </div>
    </Expanded>
  );
}

export default Subscription;

const Container = styled.div`
  width: calc(100vw - 60px);
  background-color: #FFFFFF;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 25px;
`;

const SubscriptionImg = styled.img`
  width: fit-content;
  height: 200px;
`;

const DropdownBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: #E0D1ED;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
`;

const Visible = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-size: 18px;
  color: #4D65A8;
`;

const ArrowDown = styled(TiArrowDown)`
  width: 23px;
  height: 23px;
  color: #4D65A8;
`;

const Expanded = styled.form`
  width: 100%;
  display: none;
  flex-direction: column;
  background-color: #E0D1ED;
  border-radius: 0px 0px 5px 5px;
  margin-bottom: 5px;
  padding: 10px;
`;

const Check = styled.input``;

const Label = styled.label`
  font-size: 15px;
  font-weight: 400;
  color: #4D65A8;
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
  margin-top: 20px;
`;
