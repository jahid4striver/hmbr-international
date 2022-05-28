import './App.css';
import Navbar from './components/shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/shared/Footer';
import Login from './components/pages/Authentication/Login';
import SignUp from './components/pages/Authentication/SignUp';
import Purchase from './components/pages/Purchase/Purchase';
import PrivateRoute from './components/pages/Authentication/PrivateRoute';
import Dashboard from './components/pages/Dashboard/Dashboard';
import MyOrders from './components/pages/Dashboard/MyOrders';
import AddReview from './components/pages/Dashboard/AddReview';
import MyProfile from './components/pages/Dashboard/MyProfile';
import Payment from './components/pages/Dashboard/Payment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProfile from './components/pages/Dashboard/UpdateProfile';
import AdminRoute from './components/pages/Authentication/AdminRoute';
import AddProduct from './components/pages/Dashboard/AddProduct';
import ManageProducts from './components/pages/Dashboard/ManageProducts';
import ManageOrders from './components/pages/Dashboard/ManageOrders';
import ManageUsers from './components/pages/Dashboard/ManageUsers';
import Tools from './components/pages/Tools/Tools';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Blogs from './components/pages/Blogs/Blogs';
import MyPortfolio from './components/pages/MyPortfolio/MyPortfolio';
import NotFound from './components/pages/NotFound/NotFound';

function App() {

  const [user]= useAuthState(auth)
  console.log(user);

  


  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        {/* Public Routes */}

        <Route path='/' element={<Home />}></Route>
        <Route path='/tools' element={<Tools />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='*' element={<NotFound/>}></Route>


        {/* Private Routes */}

        <Route path='/purchase/:id' element={<PrivateRoute>
          <Purchase />
        </PrivateRoute>}>
        </Route>
        <Route path='/dashboard' element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='myprofile/updateprofile' element={<UpdateProfile />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='addproduct' element={<AddProduct />}></Route>
          <Route path='manageproducts' element={<ManageProducts />}></Route>
          <Route path='manageorders' element={<ManageOrders />}></Route>
          <Route path='manageusers' element={<ManageUsers/>}></Route>


        </Route>


        {/* Admin Routes */}


       
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
