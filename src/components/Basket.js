import React, { useContext } from 'react';
import { AppContext } from './../context/appContext';
import NominatedMovies from './NominatedMovies';

const Basket = () => {
  const [ state, dispatch ] = useContext(AppContext);
  const { basketOpen } = state;
  return (
    <div className={`basket ${basketOpen ? 'basket-show' : 'basket-hide' }`}>
      <NominatedMovies />
    </div>
  )
}

export default Basket
