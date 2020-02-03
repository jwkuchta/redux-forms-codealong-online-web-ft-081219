import React, { Component } from 'react'
import { connect } from 'react-redux'
 
class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {text: ''}
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={e => this.handleChange(e)} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDTP = dispatch => {
  return {addTodo: item => dispatch({type: 'ADD_TODO', payload: item})}
}
 
export default connect(null, mapDTP)(CreateTodo);
