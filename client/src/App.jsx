import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './pages/SignIn';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Profile from './Pages/Profile'
import Header from "./component/Header"

export default function App() {
  return (
  <BrowserRouter>
  
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/Sign-up" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />

  </Routes>
  </BrowserRouter>
  );
  
}
