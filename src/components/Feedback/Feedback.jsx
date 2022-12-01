import { Component } from 'react';
import {
  FeedbackList,
  FeedbackText,
  FeedbackBtnWrapper,
  FeedbackBtn,
} from './Feedback.styled';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = e => {
    const currentClick = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [currentClick]: prevState[currentClick] + 1,
      };
    });
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  }
  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  }
  render() {
    return (
      <div>
        <FeedbackText>Please, leave feedback</FeedbackText>
        <FeedbackBtnWrapper>
          <FeedbackBtn onClick={this.onBtnClick}>Good</FeedbackBtn>
          <FeedbackBtn onClick={this.onBtnClick}>Neutral</FeedbackBtn>
          <FeedbackBtn onClick={this.onBtnClick}>Bad</FeedbackBtn>
        </FeedbackBtnWrapper>
        <FeedbackText>Statistics</FeedbackText>
        <FeedbackList>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()} </li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </FeedbackList>
      </div>
    );
  }
}
