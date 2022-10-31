import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  onCheckevenOdd = () => {
    const {number} = this.state
    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {number} = this.state
    const evenOddText = this.onCheckevenOdd()
    return (
      <div className="app-container">
        <div className="even-odd-container">
          <h1>Count {number}</h1>
          <p className="even-odd-text">Count is {evenOddText}</p>
          <button onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
