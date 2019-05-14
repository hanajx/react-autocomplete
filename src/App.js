import React from 'react';
import './App.css';
import AutoBox from './AutoBox';
import {countries} from './country';

function App() {
  return (
    <div className="App">
      <h1>Autocomplete</h1>
      <AutoBox suggestions={countries}/>
    </div>
  );
}

export default App;
