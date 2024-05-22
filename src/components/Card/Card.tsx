import styled, { CSSProperties } from 'styled-components';
import { MAIN_COLOR } from '../../domain/constants/card';
import type { CardInformation } from '../../domain/types/card';

type CardProps = {
  card: CardInformation;
  onClick?: () => void;
};

const Card = ({ card, onClick }: CardProps) => {
  const { cardType, cardNumber, owner, expirationDate } = card;
  const { month, year } = expirationDate;

  return (
    <CardTemplate bgColor={MAIN_COLOR[cardType]} onClick={onClick}>
      <CardName>{cardType}</CardName>
      <CardIC />
      <CardInfoWrapper>
        <CardInput value={cardNumber[0]} type="text" maxLength={4} disabled />
        <CardInput value={cardNumber[1]} type="text" maxLength={4} disabled />
        <CardInput value={cardNumber[2]} type="password" maxLength={4} disabled />
        <CardInput value={cardNumber[3]} type="password" maxLength={4} disabled />
      </CardInfoWrapper>
      <CardInfoWrapper>
        <CardOwner>{owner.slice(0, 20)}</CardOwner>
        <CardOwner>
          {month}/{year}
        </CardOwner>
      </CardInfoWrapper>
    </CardTemplate>
  );
};

export default Card;

type CardTemplateProps = {
  bgColor: CSSProperties['backgroundColor'];
};

export const CardTemplate = styled.div<CardTemplateProps>`
  width: 213px;
  height: 133px;
  padding: 13px;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  & > * {
    color: white;
    font-size: 12px;
  }
`;

const CardIC = styled.div`
  width: 40px;
  height: 26px;
  border-radius: 4px;
  background-color: #cbba64;
`;

const CardName = styled.div`
  width: 100%;
  height: 36px;
  text-align: left;
`;

const CardInput = styled.input`
  width: 40px;
  text-align: center;
  letter-spacing: 2px;
  color: white;
  padding: 0 0 0 2px;

  :disabled {
    opacity: 1;
  }
`;

const CardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9px;
`;

const CardOwner = styled.div``;
