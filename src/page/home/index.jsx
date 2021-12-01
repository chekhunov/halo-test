import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import style from './Home.module.scss';
import Card from '../../components/card';
import CardPoppup from '../../components/cardPoppup';
import Button from '../../components/button';

import { fetchCards } from '../../store/cardActions';

function Home() {
  const cards = useSelector((state) => state.cards.cards);
  const [poppupActive, setPoppupActive] = useState({ active: false, title: '', id: null });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const minPriceCard = () => {
    const newArr = [];
    const item = cards.map((item) => item.price);
    const minPrice = Math.min(...item);
    cards.map((item) => item.price === minPrice && newArr.push(item));
    return newArr;
  };

  const clickBuyCard = (id) => {
    const newArr = [];
    cards.map((item, index) => index === id && newArr.push(item));
    return newArr;
  };

  const closePoppup = () => {
    setPoppupActive({ active: false, title: '', id: null });
  };

  return (
    <div className={classNames(style.home, { active: poppupActive.active })}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.cards}>
            {cards &&
              cards.map((item, index) => (
                <Card
                  key={item.id}
                  index={index}
                  {...item}
                  poppupActive={poppupActive}
                  setPoppupActive={setPoppupActive}
                />
              ))}
          </div>

          <Button
            name={'Buy cheapest'}
            poppupActive={poppupActive}
            setPoppupActive={setPoppupActive}
          />
        </div>
      </div>

      <div className={classNames(poppupActive.active ? 'poppupActive link' : '')}>
        {poppupActive.active &&
          poppupActive.title === 'Buy cheapest' &&
          minPriceCard().map((item) => (
            <CardPoppup
              key={item.id}
              poppupActive={poppupActive}
              {...item}
              closePoppup={closePoppup}
            />
          ))}

        {poppupActive.active &&
          poppupActive.title === 'Buy' &&
          clickBuyCard(poppupActive.id).map((item) => (
            <CardPoppup
              key={item.id}
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
