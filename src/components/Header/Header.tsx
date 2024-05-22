import styled from 'styled-components';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return <Wrapper>{title}</Wrapper>;
};

export default Header;

const Wrapper = styled.header`
  color: #383838;
  height: 20px;
  font-size: 16px;
`;
