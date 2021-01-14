import React from 'react';

class Input extends React.Component {
  render() {
    const { inputLabel, inputName, inputType, inputValue, onChangeInput } = this.props;
    return(
      <label>
        {inputLabel}
        <input
          name={inputName}
          type={inputType}
          value={inputValue}
          onChange={onChangeInput}/>
      </label>
    );
  }
};

export default Input;