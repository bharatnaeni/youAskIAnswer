import './index.css'

const Question = props => {
  const {item} = props
  const {question} = item

  return <li>{question}</li>
}

export default Question
