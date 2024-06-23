import Card from '../../components/Card';
import { useCardListContext } from '../../contexts/CardListContexts';
import styled from 'styled-components';
import CardAddButton from './CardAddButton';
import Layout from '../../components/Layout';

type CardListProps = {
  setPageCardRegistration: () => void;
};

const CardList = ({ setPageCardRegistration }: CardListProps) => {
  const { cardList } = useCardListContext();

  return (
    <Layout title="보유 카드">
      <CardListWrapper>
        {cardList.map((card) => (
          <CardItemWrapper key={card.id}>
            <Card card={card} />
            <CardAlias>{card.alias}</CardAlias>
          </CardItemWrapper>
        ))}
        <CardItemWrapper>
          <CardAddButton onClick={setPageCardRegistration} />
        </CardItemWrapper>
      </CardListWrapper>
    </Layout>
  );
};

export default CardList;

const CardListWrapper = styled.ul`
  padding: 20px 0 10px 0;
  height: 644px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: scroll;

  @media (max-width: 500px) {
    min-height: -webkit-fill-available;
  }
`;

const CardItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardAlias = styled.div`
  margin-top: 10px;
`;
