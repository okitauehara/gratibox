import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { TiArrowDown } from 'react-icons/ti';

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
  height: auto;
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
  transform: ${(props) => (props.hidden ? 'none' : 'rotate(180deg)')};
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inline = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 5px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #E0D1ED;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #4D65A8;
  padding: 10px;
  margin-bottom: 5px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #4D65A8;
    opacity: 0.7;
  }
`;

const CepInput = styled(DebounceInput)`
  width: 100%;
  height: 40px;
  background-color: #E0D1ED;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #4D65A8;
  padding: 10px;
  margin-bottom: 5px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #4D65A8;
    opacity: 0.7;
  }
`;

const Instruction = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #4D65A8;
  margin-bottom: 10px;

  & span {
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
  }

  & a {
    color: #4D65A8;
    text-decoration: underline;
  }
`;

const SubsText = styled.p`
  font-size: 18px;
  color: #4D65A8;

  & span {
    color: #E63C80;
  }
`;

const NextDates = styled.p`
  font-size: 18px;
  color: #E63C80;
  padding-left: 30px;
  margin-top: 5px;
`;

const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Product = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #E63C80;
  margin-top: 15px;
`;

export {
  Container,
  SubscriptionImg,
  PlanBox,
  DropdownBox,
  Visible,
  Text,
  ArrowDown,
  ExpandedDate,
  ExpandedCheck,
  Label,
  Button,
  Inline,
  Input,
  CepInput,
  Instruction,
  SubsText,
  NextDates,
  Products,
  Product,
};
