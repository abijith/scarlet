/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Input from 'components/input'

export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
      this.state = {
        messages : "This is a new message",
        showMessage: false,
      }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        <Input type="text" className="text" />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

// componentWillMount() {
//   console.log('Component WILL MOUNT!')
// }
// componentDidMount() {
//   console.log('Component DID MOUNT!');
// }
// componentWillReceiveProps(newProps) {    
//   console.log('Component WILL RECIEVE PROPS!');
// }
// shouldComponentUpdate(newProps, newState) {
//   return true;
// }
// componentWillUpdate(nextProps, nextState) {
//   console.log('Component WILL UPDATE!');
// }
// componentDidUpdate(prevProps, prevState) {
//   console.log('Component DID UPDATE!');
// }
// componentWillUnmount() {
//   console.log('Component WILL UNMOUNT!');
// }

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainpage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPage);
