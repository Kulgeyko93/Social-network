import React from 'react';

import style from './userOnline.module.scss';
import userOnlineImage from './../../../../../assets/images/users/user-7.jpg';


const UserOnline = (props) => {

   return (
      <div>
         <a href='#'><img src={props.image} alt='userOnline' />
            <div className={style.online}></div></a>
      </div>
   );
};

export default UserOnline;

