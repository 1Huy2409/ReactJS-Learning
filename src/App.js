import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return(
    <div>
      <MyButton />
      <MyButton />
    </div>
  )
}
function MyButton()
{
  const [count, setCount] = useState(0);
  function HandleClick ()
  {
    setCount(count+1);
  }
  return (
    <button onClick={HandleClick}>Click me {count} times</button>
  )
}
export default App;
