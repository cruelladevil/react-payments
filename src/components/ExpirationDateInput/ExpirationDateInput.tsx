import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import { Label } from '../Label';
import { useFocus } from '../../hooks/useFocus';
import type { CardInformation } from '../../domain/types/card';

type ExpirationDateInputProps = {
  expirationDate: CardInformation['expirationDate'];
  onChange: {
    onChangeMonth: React.ChangeEventHandler<HTMLInputElement>;
    onChangeYear: React.ChangeEventHandler<HTMLInputElement>;
  };
};

const ExpirationDateInput = ({ expirationDate, onChange }: ExpirationDateInputProps) => {
  const { onChangeMonth, onChangeYear } = onChange;
  const { registerFocusRef, focus } = useFocus();

  return (
    <>
      <Label htmlFor="expiration-date">만료일</Label>
      <Styled.Box marginTop="10px">
        <Input
          {...registerFocusRef(0)}
          id="expiration-date"
          type="text"
          width="65px"
          maxLength={2}
          placeholder="MM"
          textAlign="right"
          inputMode="numeric"
          onChange={(e) => {
            onChangeMonth(e);
            focus(1);
          }}
          autoComplete="off"
          value={expirationDate.month}
        />
        <Slash />
        <Input
          {...registerFocusRef(1)}
          type="text"
          width="65px"
          maxLength={2}
          placeholder="YY"
          textAlign="left"
          inputMode="numeric"
          onChange={onChangeYear}
          autoComplete="off"
          value={expirationDate.year}
        />
      </Styled.Box>
    </>
  );
};

export default ExpirationDateInput;

const Box = styled(InputBox)`
  width: 140px;
`;

const SlashWrapper = styled.div`
  width: 13px;
  color: #737373;
  font-size: 18px;
  text-align: center;
`;

const Styled = {
  Box,
  SlashWrapper,
};

const Slash = () => {
  return <SlashWrapper>/</SlashWrapper>;
};
