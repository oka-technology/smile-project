import * as React from 'react';
import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import * as styles from './TweetButton.scss';

const duration: number = 300;
const delay: number = 500;

const defaultStyles: React.CSSProperties = {
  transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  opacity: 0,
  transform: 'translateY(20%)'
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, transform: '' },
  entered: { opacity: 1, transform: '' },
}

const TWEET_TEXT_DEFAULT: string = encodeURI("https://twitter.com/intent/tweet?text=https://oka.technology/smile-project+‪♪(๑ᴖ◡ᴖ๑)♪");
const createTweetURL = (text: string): string => 
  `https://twitter.com/intent/tweet?text=${encodeURI(text.replace(/\n/g, " ")).replace(/%E2%80%AA/g, "")}`;

function TweetButton(props: TweetButtonProps) {
  const [inProp, setInProp] = useState<boolean>(false);
  const [twitterLink, setTwitterLink] = useState(TWEET_TEXT_DEFAULT);

  useEffect(() => {
    setInProp(true);
  }, []);
  
  
  useEffect(() => {
    if (props.tweetText === '') {
      setTwitterLink(TWEET_TEXT_DEFAULT);
    } else {
      setTwitterLink(createTweetURL(props.tweetText));
    }
    
  }, [props.tweetText])
  return (
    <Transition in={inProp} timeout={duration + delay}>
      {state => (
        <a
          className={styles.normal}
          target="_blank"
          href={twitterLink}
          style={{
            ...defaultStyles,
            ...transitionStyles[state]
          }}
        >‪♪(๑ᴖ◡ᴖ๑)♪ツイート♪(๑ᴖ◡ᴖ๑)♪</a>
      )}
    </Transition>
  );
}

export default TweetButton;
