import React from 'react';

import style from './posts.module.scss';
import photoSmall from './../../../../../assets/images/post-images/7.jpg';

const Posts = (props) => {
   // let postText = props.newPost.map( p => `${p.post + '__'}`);
   
   return (
      <div className={style.pageContents__content__post}>
         <img src={photoSmall} alt='user' />
         <div className={style.pageContents__content__post__container}>
            <img src={photoSmall} alt='' />

            <div className={style.userDetail}>
               <div className={style.userInfo}>
                  <div className={style.leftSide}>
                     <div className={style.fullName}>Alex</div>
                     <div className={style.followUnfollow}>
                        Follow
               </div>
                  </div>
                  <div className={style.publishInfo}>3 hours ago</div>
               </div>

               <div className={style.likeDislike}>
                  <div className={style.like}>like</div>
                  <div className={style.dislike}>dislike</div>
               </div>
            </div>
         </div>

         <p>
            <span>
               !!!!!!{props.newPost}!!!!!!!
            </span>
         </p>

         {/* toDo coments for Post */}
         {/* <div className={style.postComment}>
            <div className={style.imageComent}>
               <img src={photoSmall} alt='' />
            </div>
            <input type='text' className={style.comment} placeholder='Post a comment' />
         </div>*/}
      </div> 

   );
};

export default Posts;

