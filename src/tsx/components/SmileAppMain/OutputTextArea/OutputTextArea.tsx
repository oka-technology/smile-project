import * as React from 'react';
import { useState, useRef , useEffect} from 'react';
import { Transition } from 'react-transition-group';
import * as styles from './OutputTextArea.scss';

const duration: number = 300;
const delay: number = 300;

const defaultStyles: React.CSSProperties = {
  transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  opacity: 0,
  transform: 'translateX(-20%)'
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, transform: 'translateY(0)' },
  entered: { opacity: 1, transform: 'translateY(0)' },
}

function OutputTextarea(props: OutputTextAreaProps) {
  const [inProp, setInProp] = useState<boolean>(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  const refOftextarea = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    props.onsetRefOfOutputTextarea(refOftextarea);
  }, []);
  return (
    <Transition in={inProp} timeout={duration + delay}>
      {state => (
        <textarea
          className={styles.normal}
          placeholder="ここに出力されるよ‪♪(๑ᴖ◡ᴖ๑)♪"
          value={props.outputText}
          ref={refOftextarea}
          readOnly={true}
          style={{
            ...defaultStyles,
            ...transitionStyles[state]
          }}
        ></textarea>
      )}
    </Transition>
  )
}

export default OutputTextarea;
