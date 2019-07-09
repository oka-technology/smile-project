import '../html/index.html';

import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import './index.scss';

import * as React from 'react';
import * as ReactDom from 'react-dom';

import Footer from './components/Footer';
import SmileAppMain from './components/SmileAppMain';

function App(){
  return (
    <div>
      <SmileAppMain />
      <Footer />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('#App'));
