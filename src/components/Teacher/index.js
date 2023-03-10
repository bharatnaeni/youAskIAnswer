import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4} from 'uuid'

import Header from '../Header'
import Question from '../Question'
import './index.css'

class Teacher extends Component {
  state = {questions: [], input: ''}

  componentDidMount() {
    const stringifiedQuestion = localStorage.getItem('Questions')
    const parsedQuestion = JSON.parse(stringifiedQuestion)
    this.setState({
      questions: parsedQuestion,
    })
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickAddQuestion = () => {
    const {input} = this.state
    const newQuestion = {
      id: v4,
      question: input,
      answer: '',
    }
    this.setState(prev => ({
      questions: [...prev.questions, newQuestion],
    }))
  }

  onClickStoreData = () => {
    const {questions} = this.state
    localStorage.setItem('Questions', JSON.stringify(questions))
  }

  render() {
    const {input, questions} = this.state

    return (
      <>
        <Header />
        <div>
          <h1>Teacher</h1>
          <h1 className="todos-heading">Questions</h1>
          <h3 className="create-task-heading">Ask Questions</h3>
          <input
            type="text"
            id="todoUserInput"
            className="todo-user-input"
            placeholder="Ask Questions"
            onChange={this.onChangeInput}
            value={input}
          />
          <button className="button" onClick={this.onClickAddQuestion}>
            Add
          </button>
          <h1 className="todo-items-heading">
            My <span className="todo-items-heading-subpart">Tasks</span>
          </h1>
          <ol className="todo-items-container" id="todoItemsContainer">
            {questions.map(each => (
              <Question item={each} key={each.id} />
            ))}
          </ol>
          <button className="button" onClick={this.onClickStoreData}>
            Send Questions
          </button>
        </div>
      </>
    )
  }
}

export default Teacher
