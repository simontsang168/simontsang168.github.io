/**
 * App
 */
class App extends React.Component {
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }

  factor(){
    return Math.floor((Math.random() * 10) + 2);;
  }

  render(){
    let questions = [...Array(10).keys()].map(v => v + 1)
    console.info(questions)

    questions = questions.map(i => <MultiplicationQuestion key={i} questionNumber={i} factor1={this.getRandomIntInclusive(2, 12)} factor2={this.getRandomIntInclusive(2, 10)} />)

    return <div>
      <h1>Simple multiplication game</h1>
      {questions}
      {/* <MultiplicationQuestion questionNumber={1} factor1={3} factor2={6}  /> */}
    </div>;
  }
}

class MultiplicationQuestion extends React.Component {
  constructor(props){
    super()

    this.state = {
      correctAnswer: null
    }
  }

  check(){

    const {factor1, factor2} = this.props
    let userAnswer  = parseInt(this.userAnswer.value)
    let answer = factor1 * factor2
    this.setState({correctAnswer: userAnswer == answer})
  }
  render(){
    const {questionNumber, factor1, factor2} = this.props
    const {correctAnswer} = this.state

    return <div>
        
        <h2>Question {questionNumber}</h2>
        {factor1} x {factor2}
        <input ref={f => this.userAnswer = f} type="text" name="userAnswer" />
        <button type="button" onClick={() => this.check()}>Check</button>
        {correctAnswer != null && <div>
          {correctAnswer ? 'correct ✅' : 'wrong ❌'}
        </div>}
    </div>;
}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

