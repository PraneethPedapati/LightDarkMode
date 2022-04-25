import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true, className: 'dark-mode', text: 'Light Mode'}

  changeMode = () => {
    const {isDarkMode} = this.state
    if (isDarkMode) {
      this.setState(prevState => ({
        isDarkMode: false,
        className: 'light-mode',
        text: 'Dark Mode',
      }))
    } else {
      this.setState(prevState => ({
        isDarkMode: true,
        className: 'dark-mode',
        text: 'Light Mode',
      }))
    }
  }

  render() {
    const {isDarkMode, className, text} = this.state
    return (
      <div className="bg-container">
        <div className={`${className} color-card`}>
          <h1>Click to change mode</h1>
          <button className="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
