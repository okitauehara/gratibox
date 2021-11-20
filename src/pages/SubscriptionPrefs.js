/* eslint-disable max-len */
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useState, useEffect } from 'react';
import { PageStyle, Subtitle, Title } from '../styles/HomeStyles';
import signatureImg from '../assets/signature.jpg';
import UserContext from '../contexts/UserContext';
import SignatureContext from '../contexts/SignatureContext';
import * as S from '../styles/SubscriptionStyle';

function SubscriptionPrefs() {
  const { user } = useContext(UserContext);
  const { values, setValues } = useContext(SignatureContext);
  const { planId } = useParams();
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

  const handleChangeCheckBox = async (event) => {
    if (values.products.length && values.products.some((value) => value === event.target.value)) {
      setValues({ ...values, [event.target.name]: values.products.filter((value) => value !== event.target.value) });
    } else {
      setValues({ ...values, [event.target.name]: [...values.products, event.target.value] });
    }
  };

  const verifyChoices = () => {
    if (!values.delivery_date || !values.products.length) {
      Swal.fire({
        icon: 'warning',
        title: 'Ops...',
        text: 'Precisamos que você selecione ao menos uma data de entrega e um produto que deseja receber.',
      });
    } else {
      navigate(`/subscription-address/${planId}`);
    }
  };

  return (
    <PageStyle style={{ marginBottom: '30px' }}>
      <Title>
        Bom te ver por aqui,
        {' '}
        {user?.name}
      </Title>
      <Subtitle>“Agradecer é arte de atrair coisas boas”</Subtitle>
      <S.Container>
        <S.SubscriptionImg src={signatureImg} alt="Yoga Girl on Yellow Mat" />
        <S.PlanBox>
          <S.Text>
            Plano
            {' '}
            {planId === '1' ? 'Semanal' : 'Mensal' }
          </S.Text>
        </S.PlanBox>
        <S.DropdownBox aspect={dateIsHidden}>
          <S.Visible>
            <S.Text>Entrega</S.Text>
            <S.ArrowDown
              onClick={() => setDateIsHidden(!dateIsHidden)}
              hidden={dateIsHidden}
            />
          </S.Visible>
        </S.DropdownBox>
        {planId === '1' ? (
          <S.ExpandedDate hidden={dateIsHidden}>
            <div>
              <input
                type="radio"
                id="monday"
                name="delivery_date"
                value="monday"
                onChange={handleChange}
              />
              <S.Label htmlFor="monday">Segunda-feira</S.Label>
            </div>
            <div>
              <input
                type="radio"
                id="wednesday"
                name="delivery_date"
                value="wednesday"
                onChange={handleChange}
              />
              <S.Label htmlFor="wednesday">Quarta-feira</S.Label>
            </div>
            <div>
              <input
                type="radio"
                id="friday"
                name="delivery_date"
                value="friday"
                onChange={handleChange}
              />
              <S.Label htmlFor="friday">Sexta-feira</S.Label>
            </div>
          </S.ExpandedDate>
        ) : (
          <S.ExpandedDate hidden={dateIsHidden}>
            <div>
              <input
                type="radio"
                id="01"
                name="delivery_date"
                value="day 01"
                onChange={handleChange}
              />
              <S.Label htmlFor="01">Dia 01</S.Label>
            </div>
            <div>
              <input
                type="radio"
                id="10"
                name="delivery_date"
                value="day 10"
                onChange={handleChange}
              />
              <S.Label htmlFor="10">Dia 10</S.Label>
            </div>
            <div>
              <input
                type="radio"
                id="20"
                name="delivery_date"
                value="day 20"
                onChange={handleChange}
              />
              <S.Label htmlFor="20">Dia 20</S.Label>
            </div>
          </S.ExpandedDate>
        ) }
        <S.DropdownBox aspect={productIsHidden}>
          <S.Visible>
            <S.Text>Quero receber</S.Text>
            <S.ArrowDown
              onClick={() => setProductIsHidden(!productIsHidden)}
              hidden={productIsHidden}
            />
          </S.Visible>
        </S.DropdownBox>
        <S.ExpandedCheck hidden={productIsHidden}>
          <div>
            <input
              type="checkbox"
              id="teas"
              name="products"
              value="1"
              onChange={handleChangeCheckBox}
            />
            <S.Label htmlFor="teas">Chás</S.Label>
          </div>
          <div>
            <input
              type="checkbox"
              id="incense"
              name="products"
              value="2"
              onChange={handleChangeCheckBox}
            />
            <S.Label htmlFor="incense">Incensos</S.Label>
          </div>
          <div>
            <input
              type="checkbox"
              id="organics"
              name="products"
              value="3"
              onChange={handleChangeCheckBox}
            />
            <S.Label htmlFor="organics">Produtos Orgânicos</S.Label>
          </div>
        </S.ExpandedCheck>
      </S.Container>
      <S.Button onClick={verifyChoices}>Próximo</S.Button>
    </PageStyle>
  );
}

export default SubscriptionPrefs;
