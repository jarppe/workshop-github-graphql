import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Issues from "./Issues"

const REPOSITORY_QUERY = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      url
      issues(first: 10) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          author {
            login
          }
          body
          createdAt
        }
      }
    }
  }
`;

export default class Repository extends Component {
  renderContent({ loading, error, data }) {
    if (loading) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div>
          <div>Name: {data.repository.name}</div>
          <div>URL: {data.repository.url}</div>
          <Issues issues={data.repository.issues}/>
        </div>
      )
    }
  }

  render() {
    return (
      <Query
        query={REPOSITORY_QUERY}
        variables={{
          owner: this.props.owner,
          name: this.props.name
        }}>
        {this.renderContent}
      </Query>
    );
  }
}
