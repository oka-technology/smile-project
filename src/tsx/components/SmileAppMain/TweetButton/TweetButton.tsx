import * as React from 'react';
import * as styles from './TweetButton.scss';

const TWEET_URL_DEFAULT: string = "https://twitter.com/intent/tweet?text=https://oka.technology/smile-project+‪♪(๑ᴖ◡ᴖ๑)♪";

function TweetButton() {
  return (
    <a className={styles.normal} target="_blank" href={encodeURI(TWEET_URL_DEFAULT).replace(/%E2%80%AA/g, "")} >‪♪(๑ᴖ◡ᴖ๑)♪ツイート♪(๑ᴖ◡ᴖ๑)♪</a>
  );
}

export default TweetButton;
