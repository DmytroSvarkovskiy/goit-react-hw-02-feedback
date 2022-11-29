import { Component } from 'react';
import {
  FeedbackList,
  FeedbackText,
  FeedbackBtnWRapper,
} from './Feedback.styled';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <FeedbackText>Please, leave feedback</FeedbackText>
        <FeedbackBtnWRapper>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </FeedbackBtnWRapper>
        <FeedbackText>Statistics</FeedbackText>
        <FeedbackList>
          <li>Good</li>
          <li>Neutral</li>
          <li>Bad</li>
        </FeedbackList>
      </div>
    );
  }
}
