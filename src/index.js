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
    news: JSON,
    filtered: []
  }
  getKeyword = (event) => {
    let keyword = event.target.value
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1 // Check the title
    })
    this.setState({
      filtered
    })
  }
  render() {
    let newsFiltered = this.state.filtered;
    let newsWhole = this.state.news;
    return (
      <div>
        {/* Import Header */}
        <Header keywords={this.getKeyword} />
        {/* Import News List */}
        <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered} sample="This is my first props sample.">
          <h1>News List</h1>
        </NewsList>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.querySelector('#root')); // Render(function code, where we put the component 'Id of the main file.')
