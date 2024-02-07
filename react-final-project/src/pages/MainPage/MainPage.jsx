import React, { useEffect, useState } from 'react';
import { MainPageWrapper } from './styled';
import QuizCard from '../../components/Card/Card';
import creativeCards from '../../api/services/creativeCards';

const MainPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    creativeCards.get()
      .then((data) => {
        setCards(data);
        return data;
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MainPageWrapper>
      {cards.map((card) => (
        <QuizCard
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </MainPageWrapper>
  );
};
export default MainPage;
