import React from 'react';

import style from './leftSidebar.module.scss';
import Profile from './Profile/Profile';
import Navigation from './Navigation/Navigation';
//fontAwesome imports
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UsersOnline from './UsersOnline/UsersOnline';
import { Route } from 'react-router-dom';

const LeftSidebar = (props) => {

   return (
      <div id={style.pageContents__leftSidebar}>

         <Profile />
         <Navigation />
         
         <UsersOnline />
           
            
         </div> 
   );
};

export default LeftSidebar;

