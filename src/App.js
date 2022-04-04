
import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
      <div className="footer"> 
        This project was coded by Emma Cotter and is {""}
        <a href="https://github.com/em-cotter/final-react-weather">
          open sourced on GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
