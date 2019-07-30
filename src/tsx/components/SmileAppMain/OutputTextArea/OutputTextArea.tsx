import * as React from 'react';
import * as styles from './OutputTextArea.scss';

function OutputTextarea(props: OutputTextAreaProps) {
  return (
    <textarea
    className={styles.normal}
    placeholder="ここに出力されるよ‪♪(๑ᴖ◡ᴖ๑)♪"
    value={props.outputText}
    readOnly
    ></textarea>
  )
}

export default OutputTextarea;
