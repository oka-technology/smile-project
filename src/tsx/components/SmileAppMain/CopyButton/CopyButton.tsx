import * as React from 'react';
import * as styles from './CopyButton.scss';

function CopyButton(props: CopyButtonProps) {
  const copy = (outputTextArea: React.MutableRefObject<HTMLTextAreaElement>): void => {
    outputTextArea.current.select();
    document.execCommand("copy");
    window.alert('コピーしました‪♪(๑ᴖ◡ᴖ๑)♪')
  }
  return (
    <button className={styles.normal} type="button" onClick={() => {copy(props.areaToSelect)}}>‪♪(๑ᴖ◡ᴖ๑)♪コピー‪♪(๑ᴖ◡ᴖ๑)♪</button>
  )
}

export default CopyButton;
