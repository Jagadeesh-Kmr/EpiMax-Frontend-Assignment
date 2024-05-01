import {Link, withRouter} from 'react-router-dom'

import {RiFileSearchLine} from 'react-icons/ri'

import './index.css'

const websiteLogo =
  'https://icons.veryicon.com/png/o/education-technology/education-industry-linear-icon/task-7.png'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <Link to="/">
          <img className="website-logo" src={websiteLogo} alt="website logo" />
        </Link>
      </div>

      <div className="nav-bar-large-container">
        <Link to="/">
          <img className="website-logo" src={websiteLogo} alt="website logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              My Tasks
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/summary" className="nav-link">
              Summary
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/summary" className="nav-link">
            <RiFileSearchLine className="nav-bar-icon" />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default withRouter(Header)
