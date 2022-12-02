export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(el => (
        <button key={el} onClick={onLeaveFeedback}>
          {el}
        </button>
      ))}
    </div>
  );
};
