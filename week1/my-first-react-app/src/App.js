import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
           <h1 className='a'>Welcome!</h1>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It's such a beautiful day!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's start learning React! YAY!
        </a>
      </header>
    </div>
  );
}

export default App;
