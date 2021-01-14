import React from 'react';

class Input extends React.Component {
  render() {
    const { inputLabel, inputType, inputName, inputId, inputValue } = this.props;
    return (
      <label>
        {inputLabel}
        <input
          id={inputId}
          value={inputValue}
          type={inputType}
          name={inputName}
        />
      </label>
    );
  }
};

export default Input;
