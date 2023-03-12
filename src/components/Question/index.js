import './index.css'

const Question = props => {
  const {item} = props
  const {question, answer, id} = item
  console.log(answer)

  return (
    <li>
      <h1>{question}</h1>
      <span>{answer}</span>
    </li>
  )
}

export default Question
