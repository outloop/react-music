import React, { Component } from 'react'
import {createStore} from 'redux'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/nav'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.add = this.add.bind(this)
    this.del = this.del.bind(this)
    this.listener = this.listener.bind(this)
  }

  componentDidMount() {
    this.store = createStore(this.reducer)
    this.store.subscribe(this.listener)
  }

  listener() {
    this.setState(this.store.getState())    
  }

  reducer(state, action) {
    state = state || {
      count: 0
    }
    switch(action.type) {
      case 'INC':
        return {count: ++state.count}
      case 'DEC':
        return {count: --state.count}
      default:
        return state
    }
  }

  add() {
    this.store.dispatch({type:'INC'})
  }

  del() {
    this.store.dispatch({type:'DEC'})
  }

  render() {
    const count = this.state.count
    return (
      <div className="App">
        <Nav></Nav>
        <h2>计数：{count}</h2>
        <div className='btn-group'>
          <button className='btn btn-primary' onClick={this.add}>加</button>
          <button className='btn btn-danger' onClick={this.del}>减</button>
        </div>
      </div>
    );
  }
}

export default App;
