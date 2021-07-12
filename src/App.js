import logo from './logo.svg';
import './App.scss';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Main />
    </div>
  );
}

export default App;
