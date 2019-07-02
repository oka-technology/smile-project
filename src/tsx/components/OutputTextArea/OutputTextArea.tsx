import * as React from 'react';

class OutputTextarea extends React.Component {
  render() {
    return (
      <textarea className="output-textarea" id="Output-textarea" placeholder="ここに出力されるよ‪♪(๑ᴖ◡ᴖ๑)♪" readOnly></textarea>
    )
  }
}

export default OutputTextarea;
