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
        movieData : {}
      }
  }

  componentDidMount() {
    const url = 'https://api.themoviedb.org/4/list/1?page=1&api_key=6812091acb7ce137ce0fe8e8e8fae336';
    this.setState({
      movieData : {}
    })
  }

  render() {
    var rows = [];
    for (var i = 0; i < 5; i++) {
        rows.push(<li> key={i}</li>);
    }
    return (
      <div>
        <Helmet>
          <title>MainPage</title>
          {/* <meta name="description" content="Description of MainPage" /> */}
        </Helmet>
        <Input type="text" className="form-control" />
        {rows}
        {/* <FormattedMessage {...messages.header} /> */}
      </div>
    );
  }
}


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
