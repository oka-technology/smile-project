import * as React from 'react';
import { useState, useEffect } from 'react';

import ConversionButton from './ConvesiontButton';
import InputTextArea from './InputTextArea';
import OutputTextArea from './OutputTextArea';
import CopyButton from './CopyButton';
import TweetButton from './TweetButton';

import * as styles from './SmileAppMain.scss';

const FOOTER_HEIGHT: number = 50;

const determineHeight = (): number => {
  return window.innerHeight - FOOTER_HEIGHT;
};

const isAppleiOS = (): boolean => {
  return /ipad|iphone/i.test(navigator.userAgent);
}

function SmileAppMain() {
  const [height, setHeight] = useState<number>(determineHeight());
  const [inputtedText,setInputtedText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  
  useEffect(() => {
    const onResize = () => setHeight(determineHeight());
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);
  
  const onSetInputtedText = (s: string): void => {
    setInputtedText(s);
  }

  const onSetOutputText = (s: string): void => {
    setOutputText(s);
  }
  
  return (
    <main>
      <article className={styles.mainArticle} style={{height}}>
        <h1 className={styles.pageTitle}>‪♪(๑ᴖ◡ᴖ๑)♪</h1>
        <InputTextArea onSetInputtedText={onSetInputtedText} inputtedText={inputtedText} />
        <ConversionButton onSetOutputText={onSetOutputText} inputtedText={inputtedText} />
        <OutputTextArea outputText={outputText} />
        <div className={styles.buttonContainer}>
          {isAppleiOS()? null : <CopyButton />}
          <TweetButton tweetText={outputText} />
        </div>
      </article>
    </main>
  );
};

export default SmileAppMain;
