import './index.css'

const Question = props => {
  const {item} = props
  const {question, answer, id} = item
  console.log(answer)

  return <li>{question}</li>
}

export default Question
