import React from 'react';
import './App.css';

import wands from './wands';
import WandList from './WandsList';


function App() {
  return (
      <WandList wands ={wands}/>
  );
}

export default App;
