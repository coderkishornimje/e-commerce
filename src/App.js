import './App.css';
import Home from './Home';
import Reviews from './reviews';
import { reviews } from './data/products';
import Navbartop from './Navbartop';

function App() {
  return (
    <div className="App">
      <Navbartop/>
      <Home/>
      <hr/>
      <h1>Review of Product given Below</h1>
      <Reviews/>
    </div>
  );
}

export default App;
