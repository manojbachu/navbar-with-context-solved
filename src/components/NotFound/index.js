// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const containerBackground = isDarkTheme ? 'container-bg' : ''
      const headingColor = isDarkTheme ? 'light-heading' : ''

      return (
        <>
          <Navbar />
          <div className={`container ${containerBackground}`}>
            <img
              className="not-found-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`heading ${headingColor}`}>Lost Your Way?</h1>
            <p className={`para ${headingColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
