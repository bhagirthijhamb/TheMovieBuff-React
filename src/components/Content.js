import React, { useContext } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { AppContext } from './../context/appContext';

const Content = () => {
  const { basketOpen } = useContext(AppContext);

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