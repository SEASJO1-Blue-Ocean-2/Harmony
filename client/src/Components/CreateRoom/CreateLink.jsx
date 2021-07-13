import React, { useState } from 'react';
import PropTypes from 'prop-types';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

function CreateLink({ href, children }) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  function onMouseEnter() {
    setStatus(STATUS.HOVERED);
  }

  function onMouseLeave() {
    setStatus(STATUS.NORMAL);
  }

  return (
    <a
      className={status}
      href={href || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}

export default CreateLink;

CreateLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
