import { UsersAPI } from "../copmonents/api/api";


//name
const SET_USERS = 'SET_USERS';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

//initial state
const initialState = {
   users: [],
   isFollow: false,
   currentPage: 2,
   pageSize: 10,
   totalCount: 1000,
}

//reducer
const usersReducer = (state = initialState, action) => {

   switch(action.type) {

      case SET_USERS: {
         return {
            ...state, users: action.users
         }
      };
      case SET_CURRENT_PAGE: {
         return {
            ...state, currentPage: action.currentPage
         }
      };
      case SET_TOTAL_COUNT: {
         return {
            ...state, totalCount: action.totalCount
         }
      };

      case FOLLOW_USER: {
         return {
            ...state, 
            users: state.users.map( u => {
               if (u.id === action.userId) {
                  return {...u, followed: true}
               }
               return u
            })
         }
      }
      case UNFOLLOW_USER: {
         return {
            ...state,
             users: state.users.map( u => {
               if (u.id === action.userId) {
                  return {...u, followed: false}
               }
               return u
            })
         }
      }

      default:
         return  state;
   }

}


//Action creator --- callback
const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const followUserSuccess = (userId) =>({type: FOLLOW_USER, userId});
export const unfollowUserSuccess = (userId) =>({type: UNFOLLOW_USER, userId});;


export default usersReducer;

//thunkCreator

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
   dispatch(setCurrentPage(currentPage))

   let data = await UsersAPI.getUsers(currentPage, pageSize);
   dispatch(setUsers(data.data.items))
   
}

// export const getFollowUnfollowUser = () => async (dispatch) => {

// }

export const followUser = (id) => async (dispatch) => {
   let response = await UsersAPI.followUserAPI(id);
   if (response.data.resultCode === 0) {
      dispatch(followUserSuccess(id))
   }
}
export const unfollowUser = (id) => async (dispatch) => {
   let response = await UsersAPI.unfollowUserAPI(id);
   if (response.data.resultCode === 0 ) {
      dispatch(unfollowUserSuccess(id));
   } 
}

//ThC- THunk-creator
export const setCurrentPageThC = (page) => async (dispatch) => {
   
}

