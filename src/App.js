
import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
