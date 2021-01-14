import React from 'react';

class Button extends React.Component {
  render() {
    const { btnType, btnText } = this.props;
    return (
      <button type={btnType}>
        {btnText}
      </button>   
    );
  }
};

export default Button;
