import React, {Component} from 'react'

import styles from './footer.css'

class Footer extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className={styles.root}>Made with <span className="fa fa-heart"></span> by <a href="https://github.com/akashprasher">Akash Prasher</a></div>
    )
  }
}

export default Footer
