import * as React from 'react';
import { useState, useEffect } from 'react';

import ConversionButton from './ConvesiontButton';
import InputTextArea from './InputTextArea';
import OutputTextarea from './OutputTextArea';
import CopyButton from './CopyButton';
import TweetButton from './TweetButton';

const FOOTER_HEIGHT: number = 50;

function determineHeight(): string {
  return String(window.innerHeight - FOOTER_HEIGHT) + 'px';
};

function SmileAppMain(props: any) {
  const [height, setHeight] = useState(determineHeight());

  useEffect(() => {
    window.addEventListener("resize", () => {setHeight(determineHeight())});  
  }, []);
  
  return (
    <main className="main">
      <article className="main-article" style={{height}}>
        <h1 className="page-title">‪♪(๑ᴖ◡ᴖ๑)♪</h1>
        <InputTextArea />
        <ConversionButton />
        <OutputTextarea />
        <div className="button-container">
          <CopyButton />
          <TweetButton />
        </div>
      </article>
    </main>
  );
};

export default SmileAppMain;
