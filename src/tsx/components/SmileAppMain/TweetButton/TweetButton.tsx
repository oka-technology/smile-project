import * as React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './TweetButton.scss';

const TWEET_TEXT_DEFAULT: string = encodeURI("https://twitter.com/intent/tweet?text=https://oka.technology/smile-project+‪♪(๑ᴖ◡ᴖ๑)♪");
const createTweetURL = (text: string): string => 
  `https://twitter.com/intent/tweet?text=${encodeURI(text.replace(/\n/g, " ")).replace(/%E2%80%AA/g, "")}`;

function TweetButton(props: TweetButtonProps) {
  const [twitterLink, setTwitterLink] = useState(TWEET_TEXT_DEFAULT);
  
  useEffect(() => {
    if (props.tweetText === '') {
      setTwitterLink(TWEET_TEXT_DEFAULT);
    } else {
      setTwitterLink(createTweetURL(props.tweetText));
    }
    
  }, [props.tweetText])
  return (
    <a className={styles.normal} target="_blank" href={twitterLink} >‪♪(๑ᴖ◡ᴖ๑)♪ツイート♪(๑ᴖ◡ᴖ๑)♪</a>
  );
}

export default TweetButton;
