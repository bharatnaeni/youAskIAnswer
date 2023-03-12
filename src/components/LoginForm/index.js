import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isSelected: true,
    isRegistred: true,
    userData: [],
    userMessage: '',
  }

  checkRoute = (jwtToken, history) =>
    jwtToken === 'master'
      ? history.replace('/teacher')
      : history.replace('/student')

  loginProcess = () => {
    const {username, password, userData} = this.state
    const result = userData.find(each => each.username === username)
    if (result !== undefined) {
      if (password !== result.password) {
        this.setState({userMessage: 'Please enter correct password'})
      } else {
        const {history} = this.props
        const jwtToken = result.role
        console.log(jwtToken)
        Cookies.set('jwt_token', jwtToken, {
          expires: 30,
        })
        this.checkRoute(jwtToken, history)
      }
    } else {
      this.setState({
        userMessage: 'user not exist,please SignIn',
      })
    }
  }

  rigistrationProcess = () => {
    const {username, password, isSelected, userData} = this.state
    const role = isSelected ? 'master' : 'student'
    const newUser = {
      username,
      password,
      role,
    }
    const result = userData.find(each => each.username === newUser.username)
    if (result === undefined) {
      this.setState({
        username: '',
        password: '',
        userData: [...userData, newUser],
        userMessage: 'Registration Success,Please Login',
      })
    } else {
      this.setState({
        username: '',
        password: '',
        userMessage: 'User Already exists,Please Login',
      })
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  isSelectedTeacher = () => {
    this.setState({isSelected: true})
  }

  isSelectedStudent = () => {
    this.setState({isSelected: false})
  }

  isSelectedSignIn = () => {
    this.setState({isRegistred: false})
  }

  isSelectedLogIn = () => {
    this.setState({isRegistred: true})
  }

  submitForm = event => {
    event.preventDefault()
    const {isRegistred} = this.state
    if (isRegistred) {
      this.loginProcess()
    } else {
      this.rigistrationProcess()
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {isSelected, isRegistred, userMessage} = this.state

    return (
      <div className="login-form-container">
        <div className="sign-log-container">
          <button
            className={`person ${isRegistred ? '' : 'additional'}`}
            onClick={this.isSelectedSignIn}
            type="button"
          >
            <h1>SignIn</h1>
          </button>
          <button
            className={`person ${isRegistred && 'additional'}`}
            onClick={this.isSelectedLogIn}
            type="button"
          >
            <h1>Login</h1>
          </button>
        </div>
        <div className="teacher-student-continer">
          <button
            className={`person ${isSelected && 'additional'}`}
            onClick={this.isSelectedTeacher}
            type="button"
          >
            <h1>Teacher</h1>
          </button>
          <button
            className={`person ${isSelected ? '' : 'additional'}`}
            onClick={this.isSelectedStudent}
            type="button"
          >
            <h1>Student</h1>
          </button>
        </div>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button
            type="submit"
            className="login-button"
            onClick={this.onClickSubmit}
          >
            Submit
          </button>
          <p className="user-message">{userMessage}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
