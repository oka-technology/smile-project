import * as React from 'react';
import { useState, useEffect } from 'react';

import ConversionButton from './ConvesiontButton';
import InputTextArea from './InputTextArea';
import OutputTextarea from './OutputTextArea';
import CopyButton from './CopyButton';
import TweetButton from './TweetButton';
import * as styles from './SmileAppMain.scss';

const FOOTER_HEIGHT: number = 50;

function determineHeight(): number {
  return window.innerHeight - FOOTER_HEIGHT;
};

function SmileAppMain(props: any) {
  const [height, setHeight] = useState(determineHeight());

  useEffect(() => {
    const onResize = () => setHeight(determineHeight());
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);
  
  return (
    <main>
      <article className={styles.mainArticle} style={{height}}>
        <h1 className={styles.pageTitle}>‪♪(๑ᴖ◡ᴖ๑)♪</h1>
        <InputTextArea />
        <ConversionButton />
        <OutputTextarea />
        <div className={styles.buttonContainer}>
          <CopyButton />
          <TweetButton />
        </div>
      </article>
    </main>
  );
};

export default SmileAppMain;
