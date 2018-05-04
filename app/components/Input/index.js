/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // messages : "This is message from Input",
      // showMessage : "true"
    }
  }
  render () {
    return (
      <div>
        <input
          type = {this.props.type}
          className = {this.props.className}
        />
      </div>
    )
  }
}


// function Input(props) {
//   return (
//     <div>
//       <input type={props.type} className={props.className} />
//     </div>
//   );
// }

// const Input = styled.input`
//   <input type="text" />
// `;

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string

};

export default Input;


