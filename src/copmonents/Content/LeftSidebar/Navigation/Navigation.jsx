import React from 'react';

import style from './navigation.module.scss';
import {  NavLink } from 'react-router-dom';


//fontAwesome imports
import { faNewspaper, faUsers, faUserFriends, faEnvelope, faImages, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navigation = (props) => {

   return (
      <div className={style.navigation}>
         <ul>
            <li>
               <NavLink to='pageContent'>
                  <div className={style.newsfeed}><FontAwesomeIcon icon={faNewspaper} /><span>My Newsfeed</span></div>
               </NavLink>
               
            </li>
            <li>
               <NavLink to='users'>
                  <div className={style.people}><FontAwesomeIcon icon={faUsers} /><span>People Nearby</span></div>
               </NavLink>
            </li>
            <li>
               <NavLink to=''>
                  <div className={style.friends}><FontAwesomeIcon icon={faUserFriends} /><span>Friends</span></div>
               </NavLink>
            </li>
            <li>
               <NavLink to=''>
                  <div className={style.messages}><FontAwesomeIcon icon={faEnvelope} /><span>Messages</span></div>
               </NavLink>
            </li>
            <li>
               <NavLink to=''>
                  <div className={style.images}> <FontAwesomeIcon icon={faImages} /><span>Images</span></div>
               </NavLink>
            </li>
            <li>
               <NavLink to=''>
                  <div className={style.videos}><FontAwesomeIcon icon={faVideo} /><span>Videos</span></div>
               </NavLink>
            </li>
         </ul>
      </div>
   )
}

export default Navigation;