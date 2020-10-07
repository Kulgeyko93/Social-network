import React from 'react';
import styles from './user.module.scss';
import userImage from './../../../../../assets/images/user.png'



const User = (props) => {

   return (
      <div className={styles.container}>
         <div className={styles.userContainer}>
            <div className={styles.userImage}>
               <img src={userImage} alt='userImage' />
            </div>
            <div className={styles.userInfo}>
               <h5><a href='#'>{props.name}</a></h5>
               <p>{'Where is person work'}</p>
            </div>
         </div>

         <div className={styles.addFriend}>
            {/* ToDo Change on form */}
            {
               props.isFollow ? 
                  <button onClick={() => props.unfollowUser(props.userId)} >Unfollow</button> :
                  <button onClick={() => props.followUser(props.userId)} >Follow</button>
            }



         </div>
      </div>
   );
}
export default User;
