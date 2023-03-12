import {Component} from 'react'
import Header from '../Header'
import Question from '../Question'
import './index.css'

const myFunction = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  times: (a, b) => a * b,
  divided_by: (a, b) => a / b,
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
      const array = each.question.split('(')
      const a = myFunction[array[0]]
      const b = myFunction[array[2]]
      const operatorFunction = myFunction[array[1]]
      const result = operatorFunction(a, b)
      console.log(result)
      return {
        ...each,
        answer: result,
      }
    })
    localStorage.setItem('Questions', JSON.stringify(modifiedData))
    this.setState({questions: modifiedData})
  }

  render() {
    const {questions} = this.state
    return (
      <>
        <Header />
        <div className="product-sections">
          <h1>Student DashBoard</h1>
          <ol className="todo-items-container" id="todoItemsContainer">
            {questions.map(each => (
              <Question item={each} key={each.id} />
            ))}
          </ol>
        </div>
      </>
    )
  }
}

export default Student
