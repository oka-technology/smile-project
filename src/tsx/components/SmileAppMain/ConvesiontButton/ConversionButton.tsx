import * as React from 'react';
import * as styles from './ConversionButton.scss';

const convert = (input: string):string => {
  return input.replace(/\n/g, "‪♪(๑ᴖ◡ᴖ๑)♪\n") + "‪♪(๑ᴖ◡ᴖ๑)♪";
}

function ConversionButton(props: ConversionButtonProps) {
  return(
    <button className={styles.normal} type="button" onClick={() => {props.onSetOutputText(convert(props.inputtedText))}}>‪♪(๑ᴖ◡ᴖ๑)♪変換‪♪(๑ᴖ◡ᴖ๑)‪♪</button>
  )
}

export default ConversionButton;
