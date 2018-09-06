import React, { Component } from "react";
import { connect } from 'react-redux'
class App extends Component {

  render() {
    { console.log("render method called") }
    return (
      <div style={{ textAlign: "center", marginTop: "10rem" }}>
        <h1>App is there</h1>
        {console.log("props:", this.props)}
        <button onClick={() => { this.props.onIncrement() }}>increment</button>
        <button onClick={() => { this.props.getTodos() }}>Get Todos</button>
        <p>=>{this.props.math}</p>
        <br />
        <input type="text" onChange={(e) => this.props.onMessageChange(e.target.value)} />
        <p>{this.props.user}</p>

      </div>
    );
  }
}
function mapState(state) {
  { console.log(state) }
  return { math: state.mathReducer.value, user: state.userReducer.name }
}

// Maps `dispatch` to `props`:
function mapDispatch(dispatch) {
  return {
    onIncrement() {
      dispatch({ type: 'CLICK_INC' })
    },
    getTodos() {
      dispatch({ type: 'GET_TODOS' })
    },
    onMessageChange(name) {
      dispatch({ type: 'MSG_CHANGE', payload: { name: name } })
    }
  }
}

// Connect them:
export default connect(mapState, mapDispatch)(App)

