import React from 'react';


import PageContent from './PageContent';
import { connect } from 'react-redux';
import { addNewPost, updateNewPostText } from '../../../../store/news-redusers';




const mapStateToProps = (state) => {

   return {
      newPost: state.newsPage.posts,
      updatePost: state.newsPage.updateNewPost,
   }
   
};

const mapDispatchToProps = (dispatch) => {

};

// export default connect(mapStateToProps, { addNewPost })(PageContentConteiner)

const PageContentConteiner = connect(mapStateToProps, { addNewPost, updateNewPostText })(PageContent)


export default PageContentConteiner;