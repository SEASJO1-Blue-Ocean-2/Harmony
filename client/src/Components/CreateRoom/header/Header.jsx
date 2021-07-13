import React from 'react';
import { PropTypes } from 'prop-types';
import CreateLink from '../CreateLink';

function Header() {
  return (
    <div className="row-default">
      <div>
        <CreateLink href="home.html">Home Link</CreateLink>
      </div>
      <div>
        <span>
          <h3>Harmony</h3>
        </span>
      </div>
      <div>
        <CreateLink href="profile.html">Profile Link</CreateLink>
      </div>
    </div>
  );
}

export default Header;
