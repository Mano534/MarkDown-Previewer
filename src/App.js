import React from 'react';
import './App.scss';
import Editor from './components/editor';
import Previewer from './components/previewer'
function App() {

  return (
    <div className="App">
      <Editor/>
      <Previewer/>
    </div>
  );
}

export default App;
