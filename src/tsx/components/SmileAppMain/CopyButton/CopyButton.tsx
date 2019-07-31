import * as React from 'react';
import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import * as styles from './CopyButton.scss';

const isAppleiOS = (): boolean => {
  return /ipad|iphone/i.test(navigator.userAgent);
}

const copy = (outputTextArea: React.MutableRefObject<HTMLTextAreaElement>): void => {
  if (isAppleiOS()) {
    outputTextArea.current.readOnly = false;
    const range = document.createRange();
    range.selectNodeContents(outputTextArea.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    outputTextArea.current.readOnly = true;
    window.alert('コピーしました‪♪(๑ᴖ◡ᴖ๑)♪');
    console.log('ii');

  } else {
    outputTextArea.current.select();
    document.execCommand("copy");
    window.alert('コピーしました‪♪(๑ᴖ◡ᴖ๑)♪');
  }
}

const CopyButton = (props: CopyButtonProps): JSX.Element => {
  
  return (
    <button className={styles.normal} type="button" onClick={() => {copy(props.areaToSelect)}}>‪♪(๑ᴖ◡ᴖ๑)♪コピー‪♪(๑ᴖ◡ᴖ๑)♪</button>
  )
}

export default CopyButton;
