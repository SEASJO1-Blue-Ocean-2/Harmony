import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ user }) => (
  <div>
    <Link to="/" exact="true">
      {user && <input type="image" src="https://img.icons8.com/material/452/home--v5.png" className="homePageIcon" alt="homePageImg" /> }
    </Link>
    <h1 className="Harmony">harmony</h1>
    <Link to="/profile">
      {user && <img src="http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" className="profileIcon" alt="profileImg" /> }
    </Link>
  </div>
);

export default NavigationBar;
