import React from 'react';
import Button from './Button'

class HelloWorld extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      who: 'unknown'
    }
    this.changeTarget = this.changeTarget.bind(this);
  }
changeTarget(newTarget) {
  this.setState({
    who: newTarget
  })
}

  render () {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <Button clickme={this.changeTarget}/>
      </div>
    )
  }
}

export default HelloWorld;