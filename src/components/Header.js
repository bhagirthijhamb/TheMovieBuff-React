import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
        <div className="wrapper">
          <div className="header_title">
            <h1>The Movie Buff</h1>
          </div>
          <div className="header_introText">
            <p>Welcome to The Movie Buff's 1st ever virtual movie awards!</p>
            <p>"We want to know which movie are the all time fan favourites so we'll need your help. Tell us what your most beloved films are by nominating your top 5 favourites."</p>
            <p>Poll close on June 15 at 9 a.m. EST so get your votes in ASAP!</p>
            <button className="voteNow-btn"><a href="#search-area">Vote Now</a></button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
