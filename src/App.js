import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/shared/Footer';
import Login from './components/pages/Authentication/Login';
import SignUp from './components/pages/Authentication/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* Public Routes */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
