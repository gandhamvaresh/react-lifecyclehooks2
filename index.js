import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import  FetchData  from "./Components/fetchData"



class Index extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <App />
        <FetchData />
       </div>
    );
  }
}

render(<Index />, document.getElementById('root'));
