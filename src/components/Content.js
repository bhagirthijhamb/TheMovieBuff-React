import React, { useContext } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Notification from './Notification';
import { AppContext } from './../context/appContext';

const Content = () => {
  const [ state, dispatch ] = useContext(AppContext);
  const { basketOpen, nominatedMovies } = state;

  return (
    <div className={`content ${basketOpen ? 'slideContent' : ''}`}>
      { nominatedMovies.length === 5 && <Notification />}
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Content;