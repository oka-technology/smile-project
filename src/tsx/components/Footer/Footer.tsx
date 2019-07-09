import * as React from 'react';
import * as styles from './Footer.scss';

function Footer(props)  {
  return (
    <footer className={styles.footer}>
      <div>
        <dl className={styles.author}>
          <dt className={styles.authorTeam}>作った人</dt>
          <dd className={styles.authorTag}><a className={styles.twitterLink} href="https://twitter.com/oka_technology">おか</a></dd>
        </dl>
        <p className={styles.copyright}><small>&copy; 2019 OKA TECHNOLOGY</small></p>
      </div>
    </footer>
  )  
}

export default Footer;
