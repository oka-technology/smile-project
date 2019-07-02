import '../html/index.html';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import ConversionButton from './components/ConvesiontButton';
import InputTextArea from './components/InputTextArea';
import OutputTextarea from './components/OutputTextArea';
import CopyButton from './components/CopyButton';
import TweetButton from './components/TweetButton';
import Footer from './components/Footer';


class App extends React.Component{
  render() { 
    return (
      <div>
        <main>
          <article>
            <h1>‪♪(๑ᴖ◡ᴖ๑)♪</h1>
            <InputTextArea />
            <ConversionButton />
            <OutputTextarea />
            <div>
              <CopyButton />
              <TweetButton />
            </div>
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#App'));
