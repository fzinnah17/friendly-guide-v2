import React, { Component } from 'react';
import MapContainer from '/Volumes/Seagate/Github/friendly-guide-v2/backend/src/containers/MapContainer.js';

// CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MapContainer />
      </div>
    );
  }
}

export default App;
