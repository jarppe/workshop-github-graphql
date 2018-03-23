import React, { Component } from 'react';

const isEmpty = (str) => (!str || 0 === str.length)

export default class Issues extends Component {
  render() {
    return (
      <div>
        <h2>Issues</h2>
        <div>
          {this.props.issues.nodes.map(issue => (
            <div key={issue.id}>
              <span>{issue.author.email}</span>
              <span>: </span>
              <span>{issue.body}</span>
              <span>: </span>
              <span>{issue.createdAt}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
