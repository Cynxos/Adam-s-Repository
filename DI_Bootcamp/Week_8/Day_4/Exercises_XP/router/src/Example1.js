import React, { Component } from 'react';

class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialMedias: []
    };
  }

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ socialMedias: data.SocialMedias }));
  }

  render() {
    return (
      <div>
        <h2>Social Medias</h2>
        <ul>
          {this.state.socialMedias.map((link, index) => (
            <li key={index}><a href={link}>{link}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
