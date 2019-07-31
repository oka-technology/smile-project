import * as React from 'react';
import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import * as styles from './CopyButton.scss';

const duration: number = 300;
const delay: number = 400;

const defaultStyles: React.CSSProperties = {
  transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  opacity: 0,
  transform: 'translateY(20%)'
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, transform: '' },
  entered: { opacity: 1, transform: '' },
}

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

  } else {
    outputTextArea.current.select();
    document.execCommand("copy");
    window.alert('コピーしました‪♪(๑ᴖ◡ᴖ๑)♪');
  }
}

const CopyButton = (props: CopyButtonProps): JSX.Element => {
  const [inProp, setInProp] = useState<boolean>(false);
  useEffect(() => {
    setInProp(true);
  }, []);
  
  return (
    <Transition in={inProp} timeout={duration + delay}>
      {state => (
        <button
          className={styles.normal}
          type="button"
          onClick={() => { copy(props.areaToSelect) }}
          style={{
            ...defaultStyles,
            ...transitionStyles[state]
          }}
        >‪♪(๑ᴖ◡ᴖ๑)♪コピー‪♪(๑ᴖ◡ᴖ๑)♪</button>
      )}
    </Transition>
  )
}

export default CopyButton;
