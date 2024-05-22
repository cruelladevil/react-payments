import { Label } from '../Label';
import { Input, InputBox } from '../Input';
import styled from 'styled-components';

type CardOwnerInputProps = {
  owner: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};

const CardOwnerInput = ({ owner, onChange, onBlur }: CardOwnerInputProps) => {
  return (
    <>
      <LabelWrapper>
        <Label htmlFor="owner">카드 소유자 이름 (선택)</Label>
        <Label>{owner.length}/30</Label>
      </LabelWrapper>
      <Box marginTop="10px">
        <Input
          id="owner"
          type="text"
          width="100%"
          maxLength={30}
          placeholder="이름을 입력해주세요."
          textAlign="center"
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
          value={owner}
        />
      </Box>
    </>
  );
};

export default CardOwnerInput;

const Box = styled(InputBox)``;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
