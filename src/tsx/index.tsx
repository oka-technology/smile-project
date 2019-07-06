import '../html/index.html';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as styles from './index.scss';

import Footer from './components/Footer';
import SmileAppMain from './components/SmiliAppMain';

function App(){
  return (
    <div>
      <SmileAppMain />
      <Footer />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('#App'));
