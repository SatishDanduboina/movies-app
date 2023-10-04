import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/Landingpage';
import Signup from './Components/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Moviedetails from './Components/Moviedetails';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landingpage />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/moviedetails/:id" element={<Moviedetails />}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
