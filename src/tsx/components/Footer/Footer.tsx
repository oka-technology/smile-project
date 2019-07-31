import * as React from 'react';
import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import * as styles from './Footer.scss';

const duration: number = 500;
const delay: number = 1000;

const defaultStyles: React.CSSProperties = {
  transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms linear ${delay}ms`,
  opacity: 1,
  transform: 'translateY(100%)'
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, transform: '' },
  entered: { opacity: 1, transform: '' },
}

function Footer(props) {
  const [inProp, setInProp] = useState<boolean>(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <Transition in={inProp} timeout={duration + delay}>
      {state => (
        <footer
          className={styles.footer}
          style={{
            ...defaultStyles,
            ...transitionStyles[state]
          }}
        >
          <div>
            <dl className={styles.author}>
              <dt className={styles.authorTeam}>作った人</dt>
              <dd className={styles.authorTag}><a className={styles.twitterLink} href="https://twitter.com/oka_technology">おか</a></dd>
            </dl>
            <p className={styles.copyright}><small>&copy; 2019 OKA TECHNOLOGY</small></p>
          </div>
        </footer>
      )}
    </Transition>
  )  
}

export default Footer;
