import React, { Component } from 'react';

import Layout from './components/Layout';
import Inventory from './containers/Inventory';

class App extends Component {
  render () {
    return (
      <Layout>
        <Inventory />
      </Layout>
    );
  }
}

export default App;
