import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" defaultChecked={ this.props.isCompleted } onChange={ this.props.toggleComplete }
        />
        <span>{ this.props.description }</span>
        <input type="button" value= "delete" onClick={ this.props.deleteTodo } />
      </li>
    );

  }
}

export default ToDo;
