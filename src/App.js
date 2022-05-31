
import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="Inside">
        <div className="container">
          <Weather defaultCity="Dublin" />
        </div>
        <div className="footer">
          This project was coded by Emma Cotter and is {""}
          <a
            href="https://github.com/em-cotter/final-react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
