import React from 'react';

class Select extends React.Component {
  render() {
    const { selectOption } = this.props;
    return (
      <label>
        <select>
          {selectOption.map((option) => (
            <option>{option}</option>
          ))}
        </select>
      </label>

    );
  }
};

export default Select;
