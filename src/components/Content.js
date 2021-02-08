import React, { useContext } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { AppContext } from './../context/appContext';

const Content = () => {
  const [ state, dispatch ] = useContext(AppContext);
  const { basketOpen } = state;

  return (
    <div className={`content ${basketOpen ? 'slideContent' : ''}`}>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Content;