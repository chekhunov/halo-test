import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import style from './Home.module.scss';
import Card from '../../components/card';
import CardPoppup from '../../components/cardPoppup';
import Button from '../../components/button';
import PreLoader from '../../components/preLoader';

import { fetchCards } from '../../store/cardActions';

function Home() {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cards);
  const isLoading = useSelector((state) => state.cards.isLoading);

  const [poppupActive, setPoppupActive] = useState({ active: false, title: '', id: null });

  // Getting data from server
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  // the lowest price
  const findCheapestProduct = () => {
    return [cards.sort((a, b) => a.price - b.price)[0]];
  };

  // Find a map on the index
  const findClickedCard = (id) => {
    return cards.filter((item, index) => index === id);
  };

  const closePoppup = () => {
    setPoppupActive({ active: false, title: '', id: null });
  };

  return (
    <div className={classNames(style.home, { active: poppupActive.active })}>
      <div className="container">
        {!isLoading && (
          <div className={style.wrapper}>
            <div className={style.cards}>
              {cards &&
                cards.map((item, index) => (
                  <Card
                    key={item.id}
                    index={index}
                    poppupActive={poppupActive}
                    setPoppupActive={setPoppupActive}
                    {...item}
                  />
                ))}
            </div>

            <Button
              name={'Buy cheapest'}
              poppupActive={poppupActive}
              setPoppupActive={setPoppupActive}
              toValidForm={() => {}}
            />
          </div>
        )}

        {isLoading && <PreLoader />}
      </div>

      <div className={classNames(poppupActive.active ? 'poppupActive link' : '')}>
        {poppupActive.active &&
          poppupActive.title === 'Buy cheapest' &&
          findCheapestProduct().map((item, index) => (
            <CardPoppup
              key={index}
              poppupActive={poppupActive}
              {...item}
              closePoppup={closePoppup}
            />
          ))}

        {poppupActive.active &&
          poppupActive.title === 'Buy' &&
          findClickedCard(poppupActive.id).map((item, index) => (
            <CardPoppup
              key={index}
              poppupActive={poppupActive}
              {...item}
              closePoppup={closePoppup}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
