import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {incNumber, decNumber} from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React-Redux</h1><hr></hr>
      <h2>Increment/Decrement Counter</h2>
      <div>
        {/* <a><span>+</span></a> */}
        <button onClick={() => dispatch(incNumber())}>+</button>
        <input type="text" value={myState}/>
        {/* <a><span>-</span></a> */}
        <button onClick={() => dispatch(decNumber())}>-</button>
      </div>
    </div>
  );
}

export default App;
