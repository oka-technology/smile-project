import * as React from 'react';
import * as styles from './OutputTextArea.scss';

function OutputTextarea() {
  return (
    <textarea className={styles.normal} placeholder="ここに出力されるよ‪♪(๑ᴖ◡ᴖ๑)♪" readOnly></textarea>
  )
}

export default OutputTextarea;
