import React from 'react';
import NewsItem from './news_list_item';

// Using Props
const NewsList = (props) => { // functional component
  // console.log(props)
  // return (
  //   <h1>{props.sample}</h1>
  // )

  // JSX map:loop, item:anonymous function(pass the value)
  const items = props.news.map((item) => {
    return (
      <NewsItem key={item.id} item={item} />
    )
  });
  return (
    <div>
      {props.children}
      {items}
    </div> // news is object so we are not able to pass that
  )
}
export default NewsList;
