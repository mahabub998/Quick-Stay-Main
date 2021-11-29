import "./App.css";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Home from "./Components/Home/Home/Home";
import "./App.css";
import Footer from "./Components/Shared/Footer/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from './Components/Login/Login';
import Service from './Components/Service/Service';
import Blogs from './Components/Pages/Blogs/Blogs';
import OurServices from './Components/Service/OurServices/OurServices';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
   
    <Navbar />
      <Routes>
      
       <Route exact path="/" element={<Home />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/about" element={<Service />}/>
       <Route path="/blogs" element={<Blogs />}/>
       <Route path="contract" element={<OurServices />}/>
      </Routes>
     <Footer />
  
    
      
      

    </div>
  );
}

export default App;
