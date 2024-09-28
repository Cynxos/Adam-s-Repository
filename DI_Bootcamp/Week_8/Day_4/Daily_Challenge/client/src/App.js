import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    response: ''
  };

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: this.state.message })
      });
      const responseData = await response.text();
      this.setState({ response: responseData });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Type something"
            />
            <button type="submit">Submit</button>
          </form>
          <h2>{this.state.response}</h2>
        </header>
      </div>
    );
  }
}

export default App;
