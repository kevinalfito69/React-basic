import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
function App() {
  const [angka, setAngka] = useState(0);
  useEffect(() => {}, []);
  const formSubmit = async(e) => {
    e.preventDefault();
    setAngka(e);
  }
  return (
    
    <div className="App">
      <form onSubmit={(e) => formSubmit(e)  }>
      <input type="text" placeholder='submit' value={angka}  onChange={
        (e) => {setAngka(e.target.value)}
      }/>
      <input type="submit" value="submit" />
      <p>{angka}</p>
      <br/>
        <img src={logo} className="App-logo" alt="logo" />
        </form>

    </div>
  );
}

export default App;
