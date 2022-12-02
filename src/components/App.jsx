import { Feedback } from './Feedback/Feedback';
import { createGlobalStyle } from 'styled-components';
import { Component } from 'react';

const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li{list-style:none;margin:0;padding:0;};
  body{
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
  changeState = typeEvent => {
    this.setState(prevState => ({
      [typeEvent]: prevState[typeEvent] + 1,
    }));
  };
  render() {
    return (
      <div>
        <GlobalStyle />
        <Feedback state={this.state} changeState={this.changeState} />
      </div>
    );
  }
}
