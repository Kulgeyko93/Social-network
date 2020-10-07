import React from 'react';
import style from './rightSidebar.module.scss'
import photoFriendAdd from './../../../assets/images/post-images/2.jpg'


const RightSidebar = (props) => {

   return (
      <div id={style.pageContents__rightSidebar}>
      <div className={style.divsuggestion}>
         <ul className={style.addFriend}>
            <span>Who to Follow</span>
            <li>
               <img src={photoFriendAdd} alt="photoFriendAdd" />
               <div className={style.friendAdd}>
                  <div className={style.fullNameFriend}>KAT Ti</div>
                  <div className={style.clickAdd}>
                     <a href='#'>Add friend</a>
                  </div>
               </div>
            </li>
         </ul>
      </div>
   </div>
   );
};

export default RightSidebar;

