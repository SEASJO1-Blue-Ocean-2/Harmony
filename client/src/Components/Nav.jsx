import React from 'react';
import { Link } from 'react-router-dom';
import css from './nav.css';

function Nav() {
  return (
    <div className={css.nav}>
      <Link to="/home">
        <img src="https://image.flaticon.com/icons/png/512/1820/1820090.png" className={css.home} alt="" />
      </Link>
      <span className={css.title}>harmony</span>
      <Link to="/profile">
        <img src="http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" className={css.profile} alt="" />
      </Link>
    </div>
  );
}

export default Nav;
