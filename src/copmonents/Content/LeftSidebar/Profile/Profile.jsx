import React from 'react';
import cn from 'classnames';
import style from './profile.module.scss';
import photoProfile from './../../../../assets/images/sidebarLeft/photoSmall.png'

//fontAwesome imports
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = (props) => {
   // let classFA = style['fas fa-user-plus'];

   return (
      <div className={style.pageContents__leftSidebar__profile}>
         <div className={style.pageContents__leftSidebar__profile__photo}>
            <img src={photoProfile} alt='photoProfile' />
         </div>

         <div className={style.pageContents__leftSidebar__infoUser}>
            <h5 className={style.pageContents__leftSidebar__fullName}><a href='#'>Rich Froning</a></h5>
            <div className={style.pageContents__leftSidebar__subscribes}>
               <FontAwesomeIcon icon={faUserPlus} />
               <span>{123} followers</span>
            </div>
         </div>

      </div>
   );
};

export default Profile;

