import React from "react";
import Calculator from "./components/Calculator/Calculator";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>IC Calculator</h1>
      </header>
      <main>
        <div className="container">
          <Calculator />
        </div>
      </main>
      <footer>
        <p>
          Powered by <a href="https://dfinity.org">Internet Computer</a>
        </p>
      </footer>
    </div>
  );
};

export default App;