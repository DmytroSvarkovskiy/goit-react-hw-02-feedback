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
      return { [currentClick]: prevState[currentClick] + 1 };
    });
  };

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
        </FeedbackList>
      </div>
    );
  }
}
