import React from 'react'; // ESX
// import React from 'react'; // Dependencies

// src folder style import
import styles from '../css/styles.module.css'

// Filter
const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => console.log('I was clicked')}>Logo</div>
      <input type="text" className={styles.search} onChange={props.keywords} />
    </header>
  )
}

export default Header;  // If you need to use this component for other component you need to available and export for them.
