import React, { Component } from 'react';

class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
      </div>
    );
  }
}

export default ColorComponent;
