
import './App.css';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import Tables from './components/tables/tables';

function App() {
  return (
    <div className='view'>
      <Nav />
      <Home />
      <Tables />
    </div>
  );
}

export default App;
