import * as React from 'react';
import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import * as styles from './ConversionButton.scss';

const duration: number = 300;
const delay: number = 200;

const defaultStyles: React.CSSProperties = {
  transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  opacity: 0,
  transform: 'translateY(20%)'
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, transform: '' },
  entered: { opacity: 1, transform: '' },
}

const convert = (input: string):string => {
  return input.replace(/\n/g, "‪♪(๑ᴖ◡ᴖ๑)♪\n") + "‪♪(๑ᴖ◡ᴖ๑)♪";
}

function ConversionButton(props: ConversionButtonProps) {
  const [inProp, setInProp] = useState<boolean>(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return(
    <Transition in={inProp} timeout={duration + delay}>
      {state => (
        <button
        className={styles.normal}
        type="button"
        onClick={() => { props.onSetOutputText(convert(props.inputtedText)) }}
        style={{
          ...defaultStyles,
          ...transitionStyles[state]
        }}
        >‪♪(๑ᴖ◡ᴖ๑)♪変換‪♪(๑ᴖ◡ᴖ๑)‪♪</button>
      )}
    </Transition>
  )
}

export default ConversionButton;
