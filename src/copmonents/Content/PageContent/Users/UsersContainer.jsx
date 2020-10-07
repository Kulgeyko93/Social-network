import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { getUsersThunkCreator, followUser, unfollowUser, setTotalCount, setCurrentPage } from '../../../../store/users-redusers';




class UserClassComponent extends React.Component {

  
   componentDidMount () {
      
      let {currentPage, pageSize } = this.props;
      this.props.getUsersThunkCreator(currentPage, pageSize)
    }

   render() {

      return (
         <Users  users={this.props.users}
                 isFollow={this.props.isFollow}
                 followUser={this.props.followUser}
                 unfollowUser={this.props.unfollowUser}
                 setTotalCount={this.props.totalCount}
                 currentPage={this.props.currentPage}
                 pageSize={this.props.pageSize}
                 totalCount={this.props.totalCount}
                 setCurrentPage={this.props.setCurrentPage}
                 getUsersThunkCreator={this.props.getUsersThunkCreator} /> 
      )
   }
}
{/* <Users users={this.props.users} getUsersThunkCreator={this.props.getUsersThunkCreator} />  */}

const mapDispatchToProps = (state) => { 

   return {
   
   users: state.usersPage.users,
   isFollow: state.usersPage.isFollow,
   currentPage: state.usersPage.currentPage,
   pageSize: state.usersPage.pageSize,
   totalCount: state.usersPage.totalCount,
   
}}

const UsersContainer = connect(mapDispatchToProps, {getUsersThunkCreator, followUser, unfollowUser, setTotalCount, setCurrentPage})(UserClassComponent)

export default UsersContainer;
