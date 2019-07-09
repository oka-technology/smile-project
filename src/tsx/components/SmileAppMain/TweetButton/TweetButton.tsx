import * as React from 'react';
import * as styles from './TweetButton.scss';

class TweetButton extends React.Component {
  render(){
    return (
      <a className={styles.normal} target="_blank" href="https://twitter.com/intent/tweet?text=&amp;url=https://oka.technology/smile-project/smile.html" >‪♪(๑ᴖ◡ᴖ๑) ♪ツイート♪(๑ᴖ◡ᴖ๑) ♪</a >
    )
  }
}

export default TweetButton;
