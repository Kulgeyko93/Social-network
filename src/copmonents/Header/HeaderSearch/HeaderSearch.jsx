import React from 'react';
import styles from './headerSearch.module.scss';

const HeaderSearch = (props) => {

   return (
      <div className={styles.header__search}>
         <form action='' method='' >
            <input className={styles.search} type='search' name='' placeholder="Search friends:photos,videos" />
            <button className={styles.submit} type='submit' name='' value=''><i className="fas fa-search"></i></button>
         </form>
      </div>
   );
};

export default HeaderSearch;