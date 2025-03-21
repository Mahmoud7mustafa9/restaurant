
import './App.css';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import Tables from './components/tables/tables';
import Meals from './components/meals/meals';

function App() {
  return (
    <div className='view'>
      <Nav />
      <Home />
      <Tables />
      <Meals />
    </div>
  );
}

export default App;
