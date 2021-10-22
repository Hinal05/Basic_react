import React, { Component } from 'react'; // ESX
// import React from 'react'; // Dependencies

// src folder style import
import '../css/styles.css'

// Using Props
class Header extends Component {
  state = {
    // active: false,
    active:'focus',
    keywords: ''
  }
  inputChangeHandler = (event) => {
    // const value = event.target.value === '' ? false : true;
    const value = event.target.value === '' ? 'focus' : 'not-focus';
    this.setState({
      active:value,
      keywords: event.target.value
    });
  }
  render() {
    return (
      // Inline dynamic style: style={{background:`${this.state.active ? 'red' : 'blue'}`}}
      <header className={`header ${this.state.active}`}>
        <div className="logo" onClick={() => console.log('I was clicked')}>Logo</div>
        <input
          type="text"
          className="search"
          onChange={this.inputChangeHandler}
        />
      </header>
    )
  }
}

// React State
// class Header extends Component {
//   state = {
//     title: 'The keyword are:',
//     keywords:''
//   }
//   inputChangeHandler = (event) => { // Fat arrow function
//     // constructor(props) { // Prop get values of components
//     //   super(props)
//     //   this.state = { // Add new property for this constructor
//     //     keywords: 'Hello'
//     //   }
//     // }
//     this.setState({ // this call inputChangeHandler function, State is already define inside the component so don't need to use constructor
//       keywords: event.target.value
//     });
//   }
//   render() {
//     return (
//       <header className="header">
//         <div className="logo" onClick={() => console.log('I was clicked')}>Logo</div>
//         <input
//           type="text"
//           className="search"
//           onChange={this.inputChangeHandler}
//         />
//         <div>{this.state.title} <strong>{this.state.keywords}</strong></div>
//       </header>
//     )
//   }
// }

// React Events
// class Header extends Component {
//   inputChangeHandler(event) {
//     console.log(event.target.value)
//     // console.log('hey')
//   }
//   render() {
//     return (
//       <header className="header">
//         {/* <div className="logo" onClick={ () => {console.log('I was clicked')} }>Logo</div> */}
//         <div className="logo" onClick={() => console.log('I was clicked')}>Logo</div> {/* ESX magic */}
//         {/*<input type="text" className="search" onClick={this.inputChangeHandler()} />*/} {/* Without clicking input it will call hey */}
//         {/*<input type="text" className="search" onClick={this.inputChangeHandler} />*/} {/* With clicking input it will call hey */}
//         <input
//           type="text"
//           className="search"
//           onChange={(e) => this.inputChangeHandler(e)} // Nested function - ES5, ES6 - Get event function
//         /> {/* Get input value in console */}
//       </header>
//     )
//   }
// }

// External style include in .html
// class Header extends Component {
//   render(){
//     return (
//       <header className="header">
//         <div className="logo">Logo</div>
//         <input type="text" className="search" />
//       </header>
//     )
//   }
// }

// Inline style
// class Header extends Component {
//   render(){
//     const styles = {
//       header:{
//         background: '#000'
//       },
//       logo:{
//         color:'#fff',
//         fontFamily:'Roboto',
//         testAlign:'center'
//       }
//     }
//     return (
//       <header style={styles.header}>
//         <div style={styles.logo}>Logo</div>
//         <input type="text"/>
//       </header>
//     )
//   }
// }

// Class base structure
// ESX
// class Header extends Component {  // Class component, component is in React
//   render(){
//     return (
//       <header>
//         <div>Logo</div>
//         <input type="text"/>
//       </header>
//     )
//   }
// }

// class Header extends React.Component {  // Class component, component is in React
//   render(){
//     return (
//       <header>
//         <div>Logo</div>
//         <input type="text"/>
//       </header>
//     )
//   }
// }

// show some user dynamic data
// const user = {
//   firstname: 'Hinal',
//   lastname: 'Modi',
//   age: 28,
//   designation: 'Front-end Developer'
// }

// Print Year
// const getYear = () => {
//   const newDate = new Date();
//   return newDate.getFullYear();
// }

// const Header = () => {  // Create component for header
//   // Get dynamic data

//   // show some user dynamic data
//   return (
//     <div>
//       The Detail of users
//       <ul>
//         <li>Username: {user.firstname} {user.lastname}</li>
//         <li>Age: {user.age}</li>
//         <li>Designation: {user.designation}</li>
//       </ul>
//     </div>
//   )

//   // return <div>Total {5 + 5}</div> // use any mathematics condition

//   // Print Year
//   // return <div>The Year is {
//   //   getYear()
//   // }</div>

//   // return <div>The date is {Date.now()}</div> // Print date in mili second

//   // return <div>This is my first react header component.</div>
// }

export default Header;  // If you need to use this component for other component you need to available and export for them.
