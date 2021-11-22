/* eslint-disable max-len */
import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';
import cep from 'cep-promise';
import UserContext from '../contexts/UserContext';
import { PageStyle, Title, Subtitle } from '../styles/HomeStyles';
import * as S from '../styles/SubscriptionStyle';
import signatureImg from '../assets/signature.jpg';
import SignatureContext from '../contexts/SignatureContext';
import { Forms } from '../styles/AccessStyle';
import { postSignature } from '../services/API';
import formatUsername from '../utils/formatUsername';

function SubscriptionAddress() {
  const { planId } = useParams();
  const { user, setUser } = useContext(UserContext);
  const {
    values, setValues, cepData, setCepData,
  } = useContext(SignatureContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

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
    if (values.cep) {
      const cepCheck = values.cep.replace(/[^0-9]/g, '');
      cep(cepCheck)
        .then((res) => setCepData(res))
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'O CEP não retornou resultados, verifique e tente novamente',
          });
          setCepData('');
        });
    }
  }, [values.cep]);

  const success = async (res) => {
    await Swal.fire({
      icon: 'success',
      title: 'Assinatura Confirmada!',
      text: 'Confira a seguir o que reservamos para você :)',
    });
    localStorage.clear();
    localStorage.setItem('@user', JSON.stringify(res.data));
    navigate('/subdetails');
  };

  const error = async (err) => {
    if (err.response?.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Verifique se todos os dados inseridos são válidos',
      });
      setIsDisabled(false);
    } else if (err.response?.status === 404) {
      await Swal.fire({
        icon: 'error',
        title: 'Usuário não encontrado',
      });
      setIsDisabled(false);
      localStorage.removeItem('@user');
      setUser('');
      navigate('/sign-in');
    } else {
      await Swal.fire({
        icon: 'error',
        title: 'Houve um erro ao validar seu acesso a essa página, você será redirecionado',
      });
      setIsDisabled(false);
      localStorage.removeItem('@user');
      setUser('');
      navigate('/sign-in');
    }
  };

  const submitSignature = async (event) => {
    event.preventDefault();
    setIsDisabled(true);
    if (!values.delivery_date || !values.products.length) {
      await Swal.fire({
        icon: 'warning',
        title: 'Ops...',
        text: 'Parece que os dados selecionados na página anterior se perderam! Você será redirecionado para reinserí-los',
      });
      setIsDisabled(false);
      navigate(`/subscription-prefs/${planId}`);
    } else if (!cepData || !values.cep || !values.number || !values.full_name) {
      Swal.fire({
        icon: 'warning',
        title: 'Ops...',
        text: 'Precisamos que você preencha os 3 campos solicitados com dados válidos!',
      });
      setIsDisabled(false);
    } else {
      postSignature(user.token, planId, values)
        .then(success)
        .catch(error);
    }
  };

  return (
    <PageStyle style={{ marginBottom: '30px' }}>
      <Title>
        Bom te ver por aqui,
        {' '}
        {formatUsername(user?.name)}
      </Title>
      <Subtitle>“Agradecer é arte de atrair coisas boas”</Subtitle>
      <Forms onSubmit={submitSignature}>
        <S.Container>
          <S.SubscriptionImg src={signatureImg} alt="Yoga Girl on Yellow Mat" />
          <S.Instruction>
            Ao inserir o CEP, os campos de endereço serão preenchidos automaticamente.
            <br />
            <span>
              Não sabe seu CEP?
              {' '}
              <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer">Consulte aqui</a>
            </span>
          </S.Instruction>
          <S.Input
            required
            placeholder="Nome completo"
            type="text"
            name="full_name"
            value={values.full_name}
            onChange={handleChange}
            disabled={isDisabled}
            autoFocus
          />
          <S.Inline>
            <S.CepInput
              required
              placeholder="CEP (8 dígitos)"
              type="text"
              name="cep"
              value={values.cep}
              onChange={handleChange}
              disabled={isDisabled}
              minLength={8}
              debounceTimeout={300}
            />
            <S.Input
              required
              placeholder="nº"
              type="number"
              name="number"
              value={values.number}
              onChange={handleChange}
              disabled={isDisabled}
            />
          </S.Inline>
          <S.PlanBox>
            <S.Text>
              {!cepData ? 'Endereço de entrega' : cepData.street}
            </S.Text>
          </S.PlanBox>
          <S.Inline>
            <S.PlanBox>
              <S.Text>
                {!cepData ? 'Cidade' : cepData.city}
              </S.Text>
            </S.PlanBox>
            <S.PlanBox>
              <S.Text>
                {!cepData ? 'Estado' : cepData.state}
              </S.Text>
            </S.PlanBox>
          </S.Inline>
        </S.Container>
        <S.Button type="submit" disabled={isDisabled}>{isDisabled ? <Loader type="ThreeDots" color="#ffffff" height={50} width={50} /> : 'Finalizar' }</S.Button>
      </Forms>
    </PageStyle>
  );
}

export default SubscriptionAddress;
