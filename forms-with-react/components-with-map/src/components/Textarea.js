import React from 'react';

class Textarea extends React.Component {
  render() {
    const { textareaLabel, textareaName, textareaRows } = this.props;
    return (
      <label>
        {textareaLabel}
        <textarea
          rows={textareaRows}
          style={{ resize: 'none' }}
          id="experience"
          name={textareaName}
        />
      </label>
    );
  }
};

export default Textarea;
