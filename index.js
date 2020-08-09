import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './Components/App';



class Index extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <App />
     
       </div>
    );
  }
}

render(<Index />, document.getElementById('root'));
