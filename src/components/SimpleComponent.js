// Code SimpleComponent Here
import React, {Component} from 'react';

class SimpleComponent extends React.Component {

  constructor(){
    super()

    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    this.setState = "sad"
  }

  render(){
    return(
      <div>
          {this.state.mood}
      </div>
    );
  }

  }
  SimpleComponent.defaultProps = {
    mood: "happy"
}
