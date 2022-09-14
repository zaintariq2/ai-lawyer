import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import PricingContent from './MyComponents/Pricing';
import Requirements from './MyComponents/Requirements';
import SignUp from './MyComponents/SignUp';
import SignIn from './MyComponents/SignIn';
import Contact from './MyComponents/Contact';
// import { Switch } from '@mui/material';

function App() {

  // Close the dropdown menu if the user clicks outside of it
  window.onClick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  return (

    <div className="App">

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/pricing" element={<PricingContent />} />

        <Route exact path="/requirements" element={<Requirements />} />

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/contact" element={<Contact />} />
        
      </Routes>

    </div>
  );
}

export default App;
