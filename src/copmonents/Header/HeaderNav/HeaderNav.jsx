import React from 'react';
import styles from './headerNav.module.scss';

const HeaderNav = (props) => {

   return (
      <div className={styles.header__nav}>
         <ul className={styles.main_menu}>
            <li className={styles.dropmenu}><a href='#'>Home</a></li>
            <li className={styles.dropmenu}><a href='#'>Newsfeed</a></li>
            <li className={styles.dropmenu}><a href='#'>Timeline</a></li>
            <li className={styles.dropmenu}><a href='#'>All Pages</a></li>
            <li className={styles.dropmenu}><a href='#'>Contact</a></li>
         </ul>
      </div>
   );
};

export default HeaderNav;