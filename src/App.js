
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
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
