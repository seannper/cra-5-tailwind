import logo from './logo.svg';
// import './App.css';


/* https://tailwindcomponents.com/cheatsheet/ */
function App() {
  return (
    <div className="text-center">
      <header className="bg-default min-h-screen flex flex-col items-center justify-center text-md color-white">
        <img src={logo} className="h-80 pointer-events-none motion-safe:animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-lightblue"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
