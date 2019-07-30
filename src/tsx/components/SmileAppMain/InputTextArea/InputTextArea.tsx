import * as React from 'react';
import * as styles from './InputTextArea.scss';

function InputTextarea(props: InputTextAreaProps) {
  return(
    <textarea
      className={styles.normal}
      placeholder="ここに文字を入れてね‪♪(๑ᴖ◡ᴖ๑)♪"
      value={props.inputtedText}
      onChange={(e) => { props.onSetInputtedText(e.target.value)}}
    ></textarea>
  )
}

export default InputTextarea;
