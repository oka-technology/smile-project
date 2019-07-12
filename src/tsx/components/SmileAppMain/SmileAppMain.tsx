import * as React from 'react';
import { useState, useEffect } from 'react';

import ConversionButton from './ConvesiontButton';
import InputTextArea from './InputTextArea';
import OutputTextarea from './OutputTextArea';
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

function SmileAppMain(props: any) {
  const [height, setHeight] = useState(determineHeight());
  const [inputText,setInputText] = useState('');

  useEffect(() => {
    const onResize = () => setHeight(determineHeight());
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  const convert = (): void => {
    console.log('test');
    
  }
  
  return (
    <main>
      <article className={styles.mainArticle} style={{height}}>
        <h1 className={styles.pageTitle}>‪♪(๑ᴖ◡ᴖ๑)♪</h1>
        <InputTextArea />
        <ConversionButton onConvert={convert}/>
        <OutputTextarea />
        <div className={styles.buttonContainer}>
          {isAppleiOS()? null : <CopyButton />}
          <TweetButton />
        </div>
      </article>
    </main>
  );
};

export default SmileAppMain;
