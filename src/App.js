import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayok] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setNayok(data))
  },[])
  // const nayoks = [{ name: 'jasim', age: 56 }, { name: 'depjol', age: 61 }, { name: 'bappaRaz', age: 15 }, { name: 'Omer Sani', age: 23 }, { name: 'Alomgir', age: 44 }];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(5);

  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h5>Number of movie:{count}</h5>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count - 1}></MovieDisplay>
      <MovieDisplay movies={count * 10}></MovieDisplay>
      <MovieDisplay movies={count % 6}></MovieDisplay>
    </div>
  );

}
function MovieDisplay(props) {
  return (
    <h4> Movies I have acted: {props.movies}</h4>
  )
}

function Nayok(props) {
  console.log(props)
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (<div style={nayokStyle}>
    <h1>Ami Nayok-{props.name}</h1>
    <h3>
      I have done 5 movies in {props.age || 30}years
    </h3>
  </div>
  );
}
export default App;
