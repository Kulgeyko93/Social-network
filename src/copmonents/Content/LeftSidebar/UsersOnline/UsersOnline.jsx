import React from 'react';

import style from './usersOnline.module.scss';
import userOnlineImage from './../../../../assets/images/users/user-7.jpg';
import UserOnline from './UserOnline/UserOnline';


const UsersOnline = (props) => {
   let usersOnlineArray = {user: [userOnlineImage, userOnlineImage, userOnlineImage, userOnlineImage, userOnlineImage, userOnlineImage, userOnlineImage, userOnlineImage, userOnlineImage, userOnlineImage]};

   let userOnlineComponent = usersOnlineArray.user.map( u => {return <li><UserOnline image={u} /></li>})

   return (
      <div className={style.pageContents__leftSidebar__profile__chat}>

         <div className={style.pageContents__leftSidebar__profile__chat_online}>CHAT ONLINE</div>

         <div className={style.pageContents__leftSidebar__profile__chat_usersOnline}>
            <ul>
               {userOnlineComponent}
            </ul>
         </div>

      </div>
   );
};

export default UsersOnline;

