import React from 'react';
// import { css } from 'glamor';
import classes from '../css/styles.css'

// Divide into multiple chunks
const NewsItem = ({item}) => { // Instead of props you can use item
  // console.log({item})
  let news_item = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    color: '#333',
    '@media(max-width: 500px)': {
      color: 'red'
    }
  })
  let item_grey = css({
    background: '#eee',
    ':hover': {
      background: '#ccc'
    }
  })
  return (
    // css module
    <div className={classes.new_items}>
      <h3>{item.title}</h3>
      <div>
        {item.feed}
      </div>
    </div>

    // <div {...news_item} {...item_grey}>

    // <div className={`${news_item} ${item_grey}`}>
    //   <h3>{item.title}</h3>
    //   <div>
    //     {item.feed}
    //   </div>
    // </div>
  )
}
// const NewsItem = (props) => { // Instead of props you can use item
//   console.log(props)
//   return (
//     <div>
//       <h3>{props.item.title}</h3>
//       <div>
//         {props.item.feed}
//       </div>
//     </div>
//   )
// }

export default NewsItem;
