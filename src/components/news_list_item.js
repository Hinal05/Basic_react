import React from 'react';
// import { css } from 'glamor';
import styles from '../css/styles.module.css'

// Divide into multiple chunks
const NewsItem = ({item}) => { // Instead of props you can use item
  return (
    // css module
    <div className={styles.new_items}>
      <h3>{item.title}</h3>
      <div>
        {item.feed}
      </div>
    </div>
  )
}

export default NewsItem;
