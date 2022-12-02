import styled from 'styled-components';
export const FeedbackBtn = styled.button`
  width: 80px;
  height: 35px;
  text-align: center;
  border-radius: 1.2em;
  font-weight: 500;
  font-size: 18px;

  cursor: pointer;
  border: 1px solid silver;
  :hover {
    background-color: ${p => {
      if (p.children === 'good') {
        return '#20b2aa';
      } else if (p.children === 'neutral') {
        return '#d9d9d9';
      } else if (p.children === 'bad') {
        return '#b34019';
      }
    }};
  }
  transition: background-color 0.4s;
`;
export const FeedbackBtnWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
  justify-content: center;
`;
