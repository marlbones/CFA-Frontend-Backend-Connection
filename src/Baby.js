import React, { Component } from 'react';

class Baby extends Component {
  render() {
    return (
      <div>
        <img src={require('./eatman' + this.props.size + '.jpg')} />
      </div>
    )
  }
}


export default Baby;
