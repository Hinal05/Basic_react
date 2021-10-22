import React, { Component } from 'react'; // Dependencies
import ReactDOM from 'react-dom';

// JSON
import JSON from './db.json';

// Components
import Header from './components/header' // Import header component
import NewsList from './components/news_list'; // Import news list component

// Using Props
class App extends Component {
  state = {
    news: JSON
  }
  render() {
    console.log(this.state.news)
    return (
      <div>
        {/* Import Header */}
        <Header />
        {/* Import News List */}
        <NewsList news={this.state.news} sample="This is my first props sample.">
          <h1>News List</h1>
        </NewsList>
      </div>
    )
  }
}

// const App = () => {
//   console.log(JSON)
//   return (
//     <div>
//       {/* Import Header */}
//       <Header />
//     </div>
//   )

  // Add single HTML tag in return, For add class used 'className'
  // return (
  //   <div className="newElement">
  //     <h1>Hello React !!!</h1>
  //     <span>Welcome</span>
  //   </div>
  // )

  // return React.createElement('h1', { className: 'title' }, React.createElement('div')) // Concatenating the same method

  // return React.createElement('h1', { className: 'title' }, 'Hellow World !!!'); // Pass argument for add class and content in h1 tag

  // return React.createElement('h1', null); // You can not pass any Arguments

  // return React.createElement('h1'); // You can see blank h1 tag (Using react element)

  // return <h1>Hello World !!!</h1> // JSX

// }

ReactDOM.render(<App/>,document.querySelector('#root')); // Render(function code, where we put the component 'Id of the main file.')
