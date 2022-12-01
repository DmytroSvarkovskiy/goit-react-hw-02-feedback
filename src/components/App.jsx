import { Feedback } from './Feedback/Feedback';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li{list-style:none;margin:0;padding:0;};body{
 display: flex;
        justify-content:center;
        align-items:center;
        color: '#010101';
  }
`;

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <GlobalStyle />
      <Feedback />
    </div>
  );
};
