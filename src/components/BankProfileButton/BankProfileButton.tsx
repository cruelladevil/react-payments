import styled from 'styled-components';

type BankProfileButtonProps = {
  name: string;
  onClick: () => void;
};

const BankProfileButton = ({ children, name, onClick }: React.PropsWithChildren<BankProfileButtonProps>) => {
  return (
    <Wrapper onClick={onClick}>
      {children}
      <BankName>{name}</BankName>
    </Wrapper>
  );
};

export default BankProfileButton;

const Wrapper = styled.button`
  width: 55px;
  height: fit-content;
`;

const BankName = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;
