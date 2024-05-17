import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import { Label } from '../Label';
import type { CardInformation } from '../../domain/types/card';
import { useFocus } from '../../hooks/useFocus';

type CardNumberInputProps = {
  cardNumber: CardInformation['cardNumber'];
  onChange: React.ChangeEventHandler<HTMLInputElement>[];
};

const CardNumberInput = ({ cardNumber, onChange }: CardNumberInputProps) => {
  const [onFirstChange, onSecondChange, onThirdChange, onFourthChange] = onChange;
  const { registerFocusRef, focus } = useFocus();

  return (
    <>
      <Label htmlFor="CardNumber">카드 번호</Label>
      <Styled.Box marginTop="10px">
        <Input
          {...registerFocusRef(0)}
          id="CardNumber"
          type="text"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={(e) => {
            onFirstChange(e);
            focus(1);
          }}
          autoComplete="off"
          value={cardNumber[0]}
        />
        <Dash />
        <Input
          {...registerFocusRef(1)}
          type="text"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={(e) => {
            onSecondChange(e);
            focus(2);
          }}
          autoComplete="off"
          value={cardNumber[1]}
        />
        <Dash />
        <Input
          {...registerFocusRef(2)}
          type="password"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={(e) => {
            onThirdChange(e);
            focus(3);
          }}
          autoComplete="off"
          value={cardNumber[2]}
        />
        <Dash />
        <Input
          {...registerFocusRef(3)}
          type="password"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={onFourthChange}
          autoComplete="off"
          value={cardNumber[3]}
        />
      </Styled.Box>
    </>
  );
};

export default CardNumberInput;

const Box = styled(InputBox)``;

const DashWrapper = styled.div`
  width: 13px;
  color: #737373;
  text-align: center;
`;

const Styled = {
  Box,
};

export const Dash = () => {
  return <DashWrapper>-</DashWrapper>;
};
