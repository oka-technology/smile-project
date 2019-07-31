import * as React from 'react';
import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import * as styles from './PageTItle.scss'

const duration: number = 300;
const delay: number = 0;

const defaultStyles: React.CSSProperties = {
  transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  opacity: 0,
  transform: 'translateY(-50%)'
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1 ,transform: 'translateY(0)'},
  entered: { opacity: 1, transform: 'translateY(0)'},
}

const PageTitle = (): JSX.Element => {
  const [inProp, setInProp] = useState<boolean>(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return(
    <Transition in={inProp} timeout={duration + delay}>
      {state => (
        <h1 className={styles.pageTitle} style={
          {
            ...defaultStyles,
            ...transitionStyles[state]
          }}
        >‪♪(๑ᴖ◡ᴖ๑)♪</h1>
      )}
    </Transition>
  );
};

export default PageTitle;
