import styled from 'styled-components';
export const FeedbackList = styled.ul`
  font-size: 25px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const FeedbackText = styled.h2`
  margin: 0 0 20px;
  font-size: 45px;
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
  border: 1px solid silver;
  :hover {
    background-color: ${p => {
      if (p.children === 'Good') {
        return '#20b2aa';
      } else if (p.children === 'Neutral') {
        return '#d9d9d9';
      } else if (p.children === 'Bad') {
        return '#b34019';
      }
    }};
  }
  transition: background-color 0.4s;
`;
