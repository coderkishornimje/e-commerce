import './App.css';
import Home from './Home';
import Reviews from './reviews';
import Navbartop from './Navbartop';
import 'bootstrap/dist/css/bootstrap.min.css';
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
