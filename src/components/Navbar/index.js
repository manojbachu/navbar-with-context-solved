// Write your code here
import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const linkClassName = isDarkTheme ? 'link-light' : 'link-dark'
      const navBackground = isDarkTheme ? 'dark-background' : ''
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const buttonImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onClickThemeButton = () => {
        toggleTheme()
      }

      return (
        <div className={`navbar ${navBackground}`}>
          <Link to="/">
            <img
              className="website-logo"
              src={websiteLogo}
              alt="website logo"
            />
          </Link>
          <ul className="home-about-container">
            <Link to="/" className="link">
              <li className={linkClassName}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={linkClassName}>About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            onClick={onClickThemeButton}
            type="button"
            className="theme-button"
          >
            <img className="theme-image" src={buttonImage} alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
