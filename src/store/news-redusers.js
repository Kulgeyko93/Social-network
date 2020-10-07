

//name
const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

//initial state
const initialState = {
      posts: [
         {id: 1, post: 'hehehehe', likeCount: 0, dislikeCount: 0},
         {id: 2, post: 'howhow', likeCount: 0, dislikeCount: 0},
      ],
      updateNewPost: 'blablabla' 
};

//reducer
const newsReducer = (state = initialState, action) => {

   switch(action.type) {
      case ADD_NEW_POST : {
         let newPostText =  state.updateNewPost;
         return {
            ...state, 
            posts: [...state.posts, {id: 3, post: newPostText, likeCount: 0, dislikeCount: 0}],
            updateNewPost: '',
         }
         
      }
      case UPDATE_NEW_POST: {
         return {
            ...state, updateNewPost: action.newPostText 
         }
      }

      default:
         return  state;
   }
}

//Action creator --- callback
export const addNewPost = () => ({type: ADD_NEW_POST});
export const updateNewPostText = (newPostText) => ({type: UPDATE_NEW_POST, newPostText});


export default newsReducer


//thunkCreator