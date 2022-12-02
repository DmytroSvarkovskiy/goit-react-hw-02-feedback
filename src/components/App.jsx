// import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { createGlobalStyle } from 'styled-components';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li{list-style:none;margin:0;padding:0;};
  body{
    height:100vh;
   display: flex;
   justify-content:center;
   align-items:center;
   color: '#010101'; 
  }
`;
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  }
  onBtnClick = e => {
    const currentClick = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [currentClick]: prevState[currentClick] + 1,
    }));
  };
  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  }
  render() {
    return (
      <div>
        <GlobalStyle />
        <Section title={'Please, leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onBtnClick}
          />
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
