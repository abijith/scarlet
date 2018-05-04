import React from 'react';
import { FormattedMessage } from 'react-intl';


import H1 from '../H1';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>Scarlet</H1>
      </div>
    );
  }
}

export default Header;
