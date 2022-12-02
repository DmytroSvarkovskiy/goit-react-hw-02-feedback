// import { Component } from 'react';
// import {
//   FeedbackList,
//   FeedbackText,
//   FeedbackBtnWrapper,
//   FeedbackBtn,
// } from './Feedback.styled';
export const Feedback = ({ state, changeState }) => {
  const { good, bad, neutral } = state;

  function onBtnClick(e) {
    const currentClick = e.target.textContent.toLowerCase();
    changeState(currentClick);
  }
  function countTotalFeedback() {
    return Object.values(state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  }
  function countPositiveFeedbackPercentage() {
    return countTotalFeedback() !== 0
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  }
  return (
    <div>
      <h2>Please, leave feedback</h2>
      <div>
        <button onClick={onBtnClick}>Good</button>
        <button onClick={onBtnClick}>Neutral</button>
        <button onClick={onBtnClick}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {countTotalFeedback()} </li>
        <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
      </ul>
    </div>
  );
};
