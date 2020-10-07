import React from 'react';

import style from './pageContent.module.scss';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

const PageContent = (props) => {

const createPost = props.newPost.map(p => { return <Posts newPost={p.post} key={p.post} />})
   return (

      <div id={style.pageContents__content}>

         <div className={style.pageContents__content__container}>
            <NewPost addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText} 
                     updatePost={props.updatePost}/>
         </div>
         {/* <Posts newPost={props.newPost} /> */}
         {createPost}
      </div>
   );
};

export default PageContent;

