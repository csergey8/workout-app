import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Components/Layouts/index'; 
import Exercises from './Components/Exercises';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
