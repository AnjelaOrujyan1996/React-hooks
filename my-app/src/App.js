import React from 'react';
import './App.css';
import {ClassCounter} from "./components/UseStateExamples/ClassCounter";
import HookCounter from './components/UseStateExamples/HookCounter';
import HookCounter2 from './components/UseStateExamples/HookCounter2';
import HookCounter3 from './components/UseStateExamples/HookCounter3'
// import HookMouse from "./components/UseStateExamples/HookMouse";
import MouseContainer from "./components/UseStateExamples/MouseContainer";

function App() {
  let changeTitle = () => {
    document.title = Math.floor(Math.random()*10) + 1
  }

  return (
    <div className="App">
      <div className='d-flex'>
      <ClassCounter changeTitle={changeTitle}/>
      <HookCounter changeTitle={changeTitle}/>
      <HookCounter2/>
      <HookCounter3/>
      {/*<HookMouse/>*/}
      <MouseContainer/>
      </div>
    </div>
  );
}

export default App;
