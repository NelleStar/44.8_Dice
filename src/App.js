// import logo from './logo.svg';
import './App.css';
import Dice from './dice';

function App() {
  return (
    <div className="App">
     <h1>Dice</h1>
     <Dice />
     <Dice numDice={4} maxVal={6} title='Mini Dice'/>
    </div>
  );
}

export default App;
