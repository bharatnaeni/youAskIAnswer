import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/')
  }
  return (
    <nav className="nav-header">
      <h1 className="nav-heading">Hello</h1>
      <button type="button" onClick={onClickLogout} className="logout-button">
        Logout
      </button>
    </nav>
  )
}
export default withRouter(Header)
