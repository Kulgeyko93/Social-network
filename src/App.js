import React from 'react';

import Header from './copmonents/Header/Header';
import styles from './App.module.scss'
import Content from './copmonents/Content/Content';

const App = (props) => {

  return (
    <div id={styles.wrapper}>
      <Header />
      <Content />

    </div>
    
  );
}

export default App;
