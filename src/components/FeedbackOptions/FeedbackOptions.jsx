import PropTypes from 'prop-types';
import { FeedbackBtn, FeedbackBtnWrapper } from './Feedbackoptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnWrapper>
      {Object.keys(options).map(el => (
        <FeedbackBtn key={el} onClick={onLeaveFeedback}>
          {el}
        </FeedbackBtn>
      ))}
    </FeedbackBtnWrapper>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.shape().isRequired,
  onLeaveFeedback: PropTypes.func,
};
