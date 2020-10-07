import React from 'react';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderNav from './HeaderNav/HeaderNav';
import styles from './header.module.scss';
import logo from './../../assets/images/logo.png'

const Header = (props) => {

   return (
      <div className={styles.fixed_header_nav}>
         <div className={styles.container}>
            <header id={styles.header}>
               <div className={styles.header__logo}>
                  <a href='#'>
                     <img src={logo} alt='logo' />
                  </a>
               </div>

               <HeaderSearch />
               <HeaderNav />
            </header>
         </div>
      </div>
   );
};

export default Header;