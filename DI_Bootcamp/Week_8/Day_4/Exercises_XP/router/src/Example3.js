import React, { Component } from 'react';

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: []
    };
  }

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ experiences: data.Experiences }));
  }

  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {this.state.experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.companyName}</h3>
            <img src={experience.logo} alt={experience.companyName} />
            <a href={experience.url}>{experience.url}</a>
            {experience.roles.map((role, idx) => (
              <div key={idx}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>{role.startDate} - {role.endDate}</p>
                <p>{role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
