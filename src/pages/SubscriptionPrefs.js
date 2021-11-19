import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { TiArrowDown } from 'react-icons/ti';
import Swal from 'sweetalert2';
import { useContext, useState, useEffect } from 'react';
import { PageStyle, Subtitle, Title } from '../styles/HomeStyles';
import signatureImg from '../assets/signature.jpg';
import UserContext from '../contexts/UserContext';

function SubscriptionPrefs() {
  const { user } = useContext(UserContext);
  const { planId } = useParams();
  const [values, setValues] = useState({
    date: '', teas: false, incense: false, organics: false,
  });
  const [dateIsHidden, setDateIsHidden] = useState(true);
  const [productIsHidden, setProductIsHidden] = useState(true);
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

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleChangeCheckBox = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  return (
    <PageStyle style={{ marginBottom: '30px' }}>
      <Title>
        Bom te ver por aqui,
        {' '}
        {user?.name}
      </Title>
      <Subtitle>“Agradecer é arte de atrair coisas boas”</Subtitle>
      <Container>
        <SubscriptionImg src={signatureImg} alt="Yoga Girl on Yellow Mat" />
        <PlanBox>
          <Text>
            Plano
            {' '}
            {planId === '1' ? 'Semanal' : 'Mensal' }
          </Text>
        </PlanBox>
        <DropdownBox aspect={dateIsHidden}>
          <Visible>
            <Text>Entrega</Text>
            <ArrowDown
              onClick={() => setDateIsHidden(!dateIsHidden)}
              isHidden={dateIsHidden}
            />
          </Visible>
        </DropdownBox>
        {planId === '1' ? (
          <ExpandedDate hidden={dateIsHidden}>
            <div>
              <input
                type="radio"
                id="monday"
                name="date"
                value="Segunda-Feira"
                onChange={handleChange}
              />
              <Label htmlFor="monday">Segunda-feira</Label>
            </div>
            <div>
              <input
                type="radio"
                id="wednesday"
                name="date"
                value="Quarta-Feira"
                onChange={handleChange}
              />
              <Label htmlFor="wednesday">Quarta-feira</Label>
            </div>
            <div>
              <input type="radio" id="friday" name="date" value="Sexta-Feira" onChange={handleChange} />
              <Label htmlFor="friday">Sexta-feira</Label>
            </div>
          </ExpandedDate>
        ) : (
          <ExpandedDate hidden={dateIsHidden}>
            <div>
              <input
                type="radio"
                id="01"
                name="date"
                value="Dia 01"
                onChange={handleChange}
              />
              <Label htmlFor="01">Dia 01</Label>
            </div>
            <div>
              <input
                type="radio"
                id="10"
                name="date"
                value="Dia 10"
                onChange={handleChange}
              />
              <Label htmlFor="10">Dia 10</Label>
            </div>
            <div>
              <input
                type="radio"
                id="20"
                name="date"
                value="Dia 20"
                onChange={handleChange}
              />
              <Label htmlFor="20">Dia 20</Label>
            </div>
          </ExpandedDate>
        ) }
        <DropdownBox aspect={productIsHidden}>
          <Visible>
            <Text>Quero receber</Text>
            <ArrowDown
              onClick={() => setProductIsHidden(!productIsHidden)}
              isHidden={productIsHidden}
            />
          </Visible>
        </DropdownBox>
        <ExpandedCheck hidden={productIsHidden}>
          <div>
            <input
              type="checkbox"
              id="teas"
              name="teas"
              value="Chás"
              onChange={handleChangeCheckBox}
            />
            <Label htmlFor="teas">Chás</Label>
          </div>
          <div>
            <input
              type="checkbox"
              id="incense"
              name="incense"
              value="Chás"
              onChange={handleChangeCheckBox}
            />
            <Label htmlFor="incense">Incensos</Label>
          </div>
          <div>
            <input
              type="checkbox"
              id="organics"
              name="organics"
              value="Chás"
              onChange={handleChangeCheckBox}
            />
            <Label htmlFor="organics">Produtos Orgânicos</Label>
          </div>
        </ExpandedCheck>
      </Container>
      <Button>Próximo</Button>
    </PageStyle>
  );
}

export default SubscriptionPrefs;

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

const PlanBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: #E0D1ED;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
`;

const DropdownBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: #E0D1ED;
  border-radius: ${(props) => (props.aspect ? '5px' : '5px 5px 0px 0px')};
  padding: 10px;
  margin-bottom: ${(props) => (props.aspect ? '5px' : '0px')};
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
  transform: ${(props) => (props.isHidden ? 'none' : 'rotate(180deg)')};
  transition: .1s;
`;

const ExpandedDate = styled.form`
  width: 100%;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  background-color: #E0D1ED;
  border-radius: 0px 0px 5px 5px;
  margin-bottom: 5px;
  padding: 10px;
`;

const ExpandedCheck = styled.form`
  width: 100%;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  background-color: #E0D1ED;
  border-radius: 0px 0px 5px 5px;
  margin-bottom: 5px;
  padding: 10px;
`;

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
