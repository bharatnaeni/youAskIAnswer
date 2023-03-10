import {Component} from 'react'
import Header from '../Header'
import Question from '../Question'
import './index.css'

const expr = function (number, operation) {
  if (!operation) return number
  return operation(number)
}

function zero(operation) {
  return expr(0, operation)
}
function one(operation) {
  return expr(1, operation)
}
function two(operation) {
  return expr(2, operation)
}
function three(operation) {
  return expr(3, operation)
}
function four(operation) {
  return expr(4, operation)
}
function five(operation) {
  return expr(5, operation)
}
function six(operation) {
  return expr(6, operation)
}
function seven(operation) {
  return expr(7, operation)
}
function eight(operation) {
  return expr(8, operation)
}
function nine(operation) {
  return expr(9, operation)
}

function plus(a) {
  return function (b) {
    return b + a
  }
}
function minus(a) {
  return function (b) {
    return b - a
  }
}
function times(a) {
  return function (b) {
    return a * b
  }
}
function dividedBy(a) {
  return function (b) {
    return b / a
  }
}

class Student extends Component {
  state = {questions: []}

  componentDidMount() {
    const stringifiedQuestion = localStorage.getItem('Questions')
    const parsedQuestion = JSON.parse(stringifiedQuestion)
    this.setState(
      {
        questions: parsedQuestion,
      },
      this.updateDataWithAnswer,
    )
  }

  updateDataWithAnswer = () => {
    const {questions} = this.state
    const modifiedData = questions.map(each => {
      const {id, question, answer} = each
      console.log(id)
      console.log(question)
      console.log(answer)
      return {
        ...each,
        answer: each.question,
      }
    })
    localStorage.setItem('Questions', JSON.stringify(modifiedData))
  }

  render() {
    const {questions} = this.state
    return (
      <>
        <Header />
        <div className="product-sections">
          <h1>Student</h1>
          <ol className="todo-items-container" id="todoItemsContainer">
            {questions.map(each => (
              <Question item={each} key={each.id} />
            ))}
          </ol>
          <button
            className="button"
            onClick={this.onClickStoreData}
            type="button"
          >
            Send Questions
          </button>
        </div>
      </>
    )
  }
}

export default Student
