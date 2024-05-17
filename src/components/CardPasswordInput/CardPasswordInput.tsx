import { Label } from '../Label';
import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import { useFocus } from '../../hooks/useFocus';

const CardPasswordInput = () => {
  const { registerFocusRef, focus } = useFocus();

  return (
    <>
      <Label htmlFor="password">카드 비밀번호</Label>
      <Styled.Wrapper marginTop="10px">
        <Styled.Box>
          <Input
            {...registerFocusRef(0)}
            id="password"
            type="password"
            width="43px"
            maxLength={1}
            textAlign="center"
            inputMode="numeric"
            autoComplete="off"
            onChange={(e) => focus(1)}
          />
        </Styled.Box>
        <Styled.Box>
          <Input
            {...registerFocusRef(1)}
            type="password"
            width="43px"
            maxLength={1}
            textAlign="center"
            inputMode="numeric"
            autoComplete="off"
          />
        </Styled.Box>
        <Input type="password" width="43px" maxLength={1} textAlign="center" value="0" disabled />
        <Input type="password" width="43px" maxLength={1} textAlign="center" value="0" disabled />
      </Styled.Wrapper>
    </>
  );
};

export default CardPasswordInput;

type WrapperProps = {
  marginTop: string;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  gap: 7px;
  margin-top: ${(props) => props.marginTop};
`;

const Box = styled(InputBox)`
  width: 43px;
`;

const Styled = {
  Wrapper,
  Box,
};
