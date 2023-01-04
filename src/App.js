import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
        <small className="card3" Name="footer">
          <a
            href="https://github.com/Aji-Sainabou/app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source coded
          </a>
          by Aji sainabou Njie
        </small>
      </div>
    </div>
  );
}

export default App;
