import {Component} from 'react'
import Header from '../Header'
import Question from '../Question'
import './index.css'

class Student extends Component {
  state = {questions: []}

  componentDidMount() {
    const stringifiedQuestion = localStorage.getItem('Questions')
    const parsedQuestion = JSON.parse(stringifiedQuestion)
    this.setState({
      questions: parsedQuestion,
    })
  }

  expr = (number, operation) => {
    if (!operation) {
      return number
    }
    return this.operation(number)
  }

  zero = operation => this.expr(0, operation)

  one = operation => this.expr(1, operation)

  two = operation => this.expr(2, operation)

  three = operation => this.expr(3, operation)

  four = operation => this.expr(4, operation)

  five = operation => this.expr(5, operation)

  six = operation => this.expr(6, operation)

  seven = operation => this.expr(7, operation)

  eight = operation => this.expr(8, operation)

  nine = operation => this.expr(9, operation)

  plus = a => b => b + a

  minus = a => b => b - a

  times = a => b => a * b

  dividedBy = a => b => b / a

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
          <button className="button" onClick={this.onClickStoreData}>
            Send Questions
          </button>
        </div>
      </>
    )
  }
}

export default Student
