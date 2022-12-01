import styled from 'styled-components';
export const FeedbackList = styled.ul`
  font-size: 30px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const FeedbackText = styled.h2`
  margin: 0 0 20px;
  font-size: 50px;
  font-weight: 500;
`;
export const FeedbackBtnWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
`;
export const FeedbackBtn = styled.button`
  width: 65px;
  height: 30px;
  text-align: center;
  border-radius: 1.1em;
  cursor: pointer;
  &:hover {
    rotate: 1.1;

    background-color: ${p => {
      if (p.children === 'Good') {
        return '#7FFFD';
      }
    }};
  }
`;
