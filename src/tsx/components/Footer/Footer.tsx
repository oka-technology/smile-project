import * as React from 'react';

function Footer(props)  {
  return (
    <footer className="footer">
      <div className="footer__contents">
        <dl className="author">
          <dt>作った人</dt>
          <dd><a className="author__twitter-link" href="https://twitter.com/oka_technology">おか</a></dd>
        </dl>
        <p className="copyright"><small>&copy; 2019 OKA TECHNOLOGY</small></p>
      </div>
    </footer>
  )  
}

export default Footer;
