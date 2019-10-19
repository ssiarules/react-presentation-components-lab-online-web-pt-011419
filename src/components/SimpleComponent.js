// Code SimpleComponent Here


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
