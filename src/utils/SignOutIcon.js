import styled from 'styled-components';
import { MdOutlineWavingHand } from 'react-icons/md';

export default function SignOutIcon() {
  return (
    <FloatCircle>
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
