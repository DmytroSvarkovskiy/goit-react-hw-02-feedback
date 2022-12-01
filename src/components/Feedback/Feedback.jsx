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
  onGoodClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  onNeutralClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  onBadClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div>
        <FeedbackText>Please, leave feedback</FeedbackText>
        <FeedbackBtnWrapper>
          <FeedbackBtn onClick={this.onGoodClick}>Good</FeedbackBtn>
          <FeedbackBtn onClick={this.onNeutralClick}>Neutral</FeedbackBtn>
          <FeedbackBtn onClick={this.onBadClick}>Bad</FeedbackBtn>
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
