import React from 'react';
import styles from './content.module.scss'
import { Route } from 'react-router-dom';

import LeftSidebar from './LeftSidebar/LeftSidebar';
import PageContentConteiner from './PageContent/MyNews/PageContentContainer';
import RightSidebar from './RightSidebar/RightSidebar';
import UsersContainer from './PageContent/Users/UsersContainer';


const Content = (props) => {
   
   return (
      <div className={styles.pageContents}>
         <div className={styles.container}>
            <LeftSidebar />

{/* Меняем в зависимости от ROUTE */}
            {/* <PageContent /> */}
            <Route path='/pageContent' render={() => <PageContentConteiner />} />
 {/* toDo change directory */}           
            {/* <Route path='' component={} /> */}
            <Route path='/users' render={() => <UsersContainer />} />
            <RightSidebar />
         </div>
      </div>
   );
};

export default Content;

