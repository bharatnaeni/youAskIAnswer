import './index.css'

const Question = props => {
  const {item} = props
  const {question, answer} = item
  console.log(answer)

  return (
    <li className="list-item">
      <h1 className="question">{question}</h1>
      {answer === '' ? (
        <></>
      ) : (
        <p className="answer-heading">
          Answer: <span className="answer">{answer}</span>
        </p>
      )}
    </li>
  )
}

export default Question
