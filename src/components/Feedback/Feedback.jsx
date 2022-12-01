import { Component } from 'react';
import {
  FeedbackList,
  FeedbackText,
  FeedbackBtnWRapper,
  FeedbackBtn,
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
          <FeedbackBtn>Good</FeedbackBtn>
          <FeedbackBtn>Neutral</FeedbackBtn>
          <FeedbackBtn>Bad</FeedbackBtn>
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
