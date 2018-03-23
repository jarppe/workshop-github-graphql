import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const USER_QUERY = gql`
  query {
    viewer {
      login
      email
    }
  }
`;

export default class User extends Component {
  render() {
    return (
      <Query query={USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading...</div>;
          } else {
            return (
              <div>
                <h1>Welcome</h1>
                <div>
                  <div>user: {data.viewer.login}</div>
                  <div>email: {data.viewer.email}</div>
                </div>
              </div>
            );
          }
        }}
      </Query>
    );
  }
}
