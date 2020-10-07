import * as axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '629253a0-603d-4084-a8ca-c9cf568becbe'
   }
});



export const UsersAPI ={
   
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response})
   },
   followUnfollowUser() {
      return instance.get(`users`).then(response => {return response.data})
   },

   followUserAPI (userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollowUserAPI (userId) {
      return instance.delete(`follow/${userId}`)
   }
}
// getUsers(currentPage = 1, pageSize = 10) {
//    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>  {return response.data})
// }
