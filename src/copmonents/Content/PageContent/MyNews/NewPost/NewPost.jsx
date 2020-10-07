import React from 'react';

import style from './newPost.module.scss';
import photoSmall from './../../../../../assets/images/post-images/5.jpg';

const NewPost = (props) => {

   let newPostElement = React.createRef();

   let onPostChange = () => {
      let text = newPostElement.current.value;
      console.log(text)
      props.updateNewPostText(text);
   }

   let addPost = () => {
      props.addNewPost()
   }
   return (

      <div className={style.pageContents__content__createPost}>
         <div className={style.formGroup}>
            <img src={photoSmall} alt='img' />
            <textarea name='text' autoFocus ref={newPostElement} onChange={onPostChange} value={props.updatePost}
                      className={style.formCreatePost} placeholder='Write you post'></textarea>
         </div>
         <div className={style.pageContents__content__tools}>
            <ul className={style.tools__publish}>
               <li>
                  <a href='#'>1</a>
               </li>
               <li>
                  <a href='#'>2</a>
               </li>
               <li>
                  <a href='#'>3</a>
               </li>
               <li>
                  <a href='#'>4</a>
               </li>
            </ul>
            <button className={style.tools__button} onClick={addPost} >Publish</button>
         </div>
      </div>


   );
};

export default NewPost;

