import React from 'react';

class Button extends React.Component {
  render() {
    const { btnLabel, btnType, btnOnClick } = this.props;
    return(
      <button type={ btnType } onClick={ btnOnClick }>
        {btnLabel}
      </button>
    );
  }
};

export default Button;