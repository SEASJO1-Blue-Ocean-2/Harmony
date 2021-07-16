import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

function PublicPrivate({ publicPrivateHandler }) {
  useEffect(() => {
    const input = document.getElementById('radio-private');
    input.click();
  }, []);

  return (
    <div className="row-default" onChange={publicPrivateHandler}>
      <div className="row-default">
        <input
          type="radio"
          name="radio-public-private"
          id="radio-private"
          value="private"
        />
        <label htmlFor="radio-private">Private</label>
      </div>
      <div className="row-default">
        <input
          type="radio"
          name="radio-public-private"
          id="radio-public"
          value="public"
        />
        <label htmlFor="radio-public">Public</label>
      </div>
    </div>
  );
}
export default PublicPrivate;

PublicPrivate.propTypes = {
  publicPrivateHandler: PropTypes.func.isRequired,
}