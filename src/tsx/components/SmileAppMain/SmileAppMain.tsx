import * as React from 'react';
import { useState, useEffect } from 'react';

import PageTitle from './PageTitle';
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

function SmileAppMain() {
  const [height, setHeight] = useState<number>(determineHeight());
  const [inputtedText,setInputtedText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [refOfOutputTextarea, setRefOfOutputTextarea] = useState<React.MutableRefObject<HTMLTextAreaElement>>();

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  const onResize = () => setHeight(determineHeight());
  
  const onSetInputtedText = (s: string): void => {
    setInputtedText(s);
  }

  const onSetOutputText = (s: string): void => {
    setOutputText(s);
  }

  const onSetRefOfOutputTextarea = (ref: React.MutableRefObject<HTMLTextAreaElement>): void => {
    setRefOfOutputTextarea(ref);
  }
  
  return (
    <main>
      <article className={styles.mainArticle} style={{height}}>
        <PageTitle />
        <InputTextArea onSetInputtedText={onSetInputtedText} inputtedText={inputtedText} />
        <ConversionButton onSetOutputText={onSetOutputText} inputtedText={inputtedText} />
        <OutputTextArea outputText={outputText} onsetRefOfOutputTextarea={onSetRefOfOutputTextarea} />
        <div className={styles.buttonContainer}>
          <CopyButton outputText={outputText} areaToSelect={refOfOutputTextarea} />
          <TweetButton tweetText={outputText} />
        </div>
      </article>
    </main>
  );
};

export default SmileAppMain;
