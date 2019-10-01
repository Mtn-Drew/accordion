import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const newName = e.target.innerHTML;
    console.log('the value of target is '+ newName)
    this.props.clickme(newName); 
  }

  render() {

    return(
      <div>
        <button onClick={this.handleClick}>World</button>
        <button onClick={this.handleClick}>Friend</button>
        <button onClick={this.handleClick}>React</button>
      </div>
    )
  }
}

export default Button;