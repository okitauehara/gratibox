import styled from 'styled-components';
import Swal from 'sweetalert2';
import { MdOutlineWavingHand } from 'react-icons/md';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { postSignOut } from '../services/API';

export default function SignOutIcon() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitSignOut = async () => {
    await Swal.fire({
      title: 'Deseja deslogar de sua conta?',
      text: 'Você precisará reinserir seus dados ao finalizar a compra',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#4D65A8',
    }).then((result) => {
      if (result.isConfirmed) {
        postSignOut(user.token)
          .then(async () => {
            localStorage.clear();
            setUser('');
            navigate('/sign-in');
          })
          .catch((err) => {
            if (err.response?.status === 401) {
              Swal.fire({
                icon: 'error',
                title: 'Usuário inexistente',
              });
            }
          });
      }
    });
  };

  return (
    <FloatCircle onClick={submitSignOut}>
      <Goodbye />
    </FloatCircle>
  );
}

const FloatCircle = styled.div`
  background-color: #4D65A8;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px 0px rgba(69, 84, 188, 0.85);
  position: fixed;
  top: 15px;
  right: 15px;
`;

const Goodbye = styled(MdOutlineWavingHand)`
  width: 20px;
  height: 20px;
`;
