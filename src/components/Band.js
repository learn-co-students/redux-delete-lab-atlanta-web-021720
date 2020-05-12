import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li id={this.props.band.id}>{this.props.band.name}</li>
        <button onClick={() => this.props.delete(this.props.band.id)}>X</button>
      </div>
      
    );
  }
};

export default Band;
