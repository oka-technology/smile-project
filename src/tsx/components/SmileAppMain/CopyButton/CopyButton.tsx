import * as React from 'react';
import * as styles from './CopyButton.scss';

function CopyButton(props: CopyButtonProps) {
  const copy = (outputTextArea: React.MutableRefObject<HTMLTextAreaElement>): void => {
    if (props.isAppleiOS) {
      outputTextArea.current.readOnly = false;
      const range = document.createRange();
      range.selectNodeContents(outputTextArea.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      outputTextArea.current.readOnly = true;
      window.alert('コピーしました‪♪(๑ᴖ◡ᴖ๑)♪');
    } else {
      outputTextArea.current.select();
      document.execCommand("copy");
      window.alert('コピーしました‪♪(๑ᴖ◡ᴖ๑)♪');
    }
    
  }
  return (
    <button className={styles.normal} type="button" onClick={() => {copy(props.areaToSelect)}}>‪♪(๑ᴖ◡ᴖ๑)♪コピー‪♪(๑ᴖ◡ᴖ๑)♪</button>
  )
}

export default CopyButton;
