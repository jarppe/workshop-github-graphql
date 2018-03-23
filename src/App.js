import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import User from './User';
import Repository from './Repository';
import logo from './logo.svg';
import './App.css';
import User from './User'
import Repository from './Repository'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    // const token = localStorage.getItem('GITHUB_TOKEN');
    operation.setContext({
      headers: {
        authorization: 'Bearer 2b376cfa8ced79bc077c27b189371e3f262081b7',
      },
    });
  },
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <User/>
        <Repository owner="jarppe" name="cljs-helloworld"/>
      </ApolloProvider>
    );
  }
}

export default App;
