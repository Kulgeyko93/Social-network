import React, { useState } from 'react';

import styles from './paginationUsers.module.scss';


const PaginationUsers = (props) => {

   let onChanged = (page) => {
      props.getUsersThunkCreator(page);
   }

   let portionSize = 10;
   //all pages
   let pagesCount = Math.ceil(props.totalCount / props.pageSize );
   let pages = [];
   //array number pages
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   let portionCount= Math.ceil(pagesCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1)

   let leftPortionNumber = (portionNumber - 1) * portionSize +1;
   let rightPortionNumber = portionNumber * portionSize;

   return (
      <div className = {styles.container}>
         {portionNumber > 1 && 
         <button className={styles.leftShooter} onClick={() => {setPortionNumber(portionNumber - 1)}} >{'<<'}</button>}
         
         <ul className = {styles.paginationList}>
            { pages.filter((p) => p >=leftPortionNumber && p <= rightPortionNumber)
            // TODO  refactoring by classnames
                   .map( p => { return props.currentPage === p ? <li className={styles.active}
                                                                     key={p}
                                                                     onClick={() => onChanged(p)} ><a href='#'>{p}</a></li>
                                                               
                                                               : <li key={p} 
                                                                     onClick={() => onChanged(p)} ><a href='#'>{p}</a></li>
               
                  }) 
         
            }
         </ul>
         
         
         {  portionCount > portionNumber &&
            <button className={styles.rightShooter} onClick={() => {setPortionNumber(portionNumber + 1)}} >{'>>'}</button>}

      </div>
   );
}

export default PaginationUsers;

// ({
//    (currentPage === p) ? <li className={styles.active} key={p}><a href='#'>{p}</a></li>
//                            : <li key={p}><a href='#'>{p}</a></li>
//  })
                                  {/* if (currentPage === p ) {
                  className= { styles.active}
               }  */}
               {/* <li className={styles.active} ><a href='#'>1</a></li>
               <li><a href='#'>2</a></li>
               <li><a href='#'>3</a></li>
               <li><a href='#'>4</a></li>
               <li><a href='#'>5</a></li>
               <li><a href='#'>6</a></li>
               <li><a href='#'>7</a></li>
               <li><a href='#'>8</a></li>
               <li><a href='#'>9</a></li>
               <li><a href='#'>10</a></li> */}