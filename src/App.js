import './App.css';
import Navbar from './components/shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/shared/Footer';
import Login from './components/pages/Authentication/Login';
import SignUp from './components/pages/Authentication/SignUp';
import Purchase from './components/pages/Purchase/Purchase';
import PrivateRoute from './components/pages/Authentication/PrivateRoute';
import { ToastContainer } from 'react-bootstrap';
import Dashboard from './components/pages/Dashboard/Dashboard';
import MyOrders from './components/pages/Dashboard/MyOrders';
import AddReview from './components/pages/Dashboard/AddReview';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        {/* Public Routes */}

        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>

        {/* Private Routes */}

        <Route path='/purchase/:id' element={<PrivateRoute>
          <Purchase />
        </PrivateRoute>}>
        </Route>


      <Route path='/dashboard' element={<PrivateRoute>
        <Dashboard/>
      </PrivateRoute>}>
        <Route index element={<MyOrders/>}></Route>
        <Route path='addreview' element={<AddReview/>}></Route>
      </Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
