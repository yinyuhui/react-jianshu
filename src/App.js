import React, { Component } from 'react';
import Header from './components/header'
import Home from './components/home'
import Detail from './components/detail/loadable'
import Login from './components/login'

import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Header /> 
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
          </BrowserRouter>
          </div>
      </Provider>
    );
  }
}

export default App;
