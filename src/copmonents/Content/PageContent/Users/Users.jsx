import React from 'react';

import styles from './users.module.scss';
import User from './User/User';
import PaginationUsers from './PaginationUsers/PaginationUsers';


const Users = (props) => {

   return (     
      <div className={styles.usersComponent}>
      <PaginationUsers  setTotalCount={props.setTotalCount}
                        currentPage={props.currentPage}
                        pageSize={props.pageSize}
                        totalCount={props.totalCount}
                        setCurrentPage={props.setCurrentPage}
                        getUsersThunkCreator={props.getUsersThunkCreator} />

         {
            props.users.map(u => <User key={u.id}
                                       name={u.name}
                                       userId={u.id}
                                       isFollow={u.followed} 
                                       followUser={props.followUser}
                                       unfollowUser={props.unfollowUser} />)

         }
      </div>
         

   ); 
}


export default Users;
