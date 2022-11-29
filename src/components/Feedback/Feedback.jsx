import { Component } from 'react';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good</li>
          <li>Neutral</li>
          <li>Bad</li>
        </ul>
      </div>
    );
  }
}
