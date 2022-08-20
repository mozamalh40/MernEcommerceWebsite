
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/layout/Home/Home';
import Navbar from './components/layout/Header/Navbar';
import ProductDetails from './components/productDetails/ProductDetails';
import Products from './components/Products/Products';
import Search from './components/Products/Search.jsx'
import './App.css'
import LoginSignup from './components/User/LoginSignup';
import { useEffect } from 'react';
import store from './store'
import { loadUser } from './actions/userAction'; 
import UserOptions from './components/layout/Header/UserOption'
import Profile from '../src/components/User/Profile'
import { useSelector } from 'react-redux';
import ProctedRout from './components/ProctedRout/ProctedRout';
import Loader from './components/layout/loading/Loader';
import UpdateProfile from './components/User/UpdateProfile'
import UpdatePassword from './components/User/UpdatePassword'
import ForgotPassword from './components/User/ForgotPassword'
import ResetPassword from './components/User/ResetPassword'
import Cart from './components/Cart/Cart'
import Favourites from './components/Cart/Favourites'
import Shipping from './components/Cart/Shipping'
import ConfirmOrder from './components/Cart/ConfirmOrder'
import PaymentHandler from './components/Cart/PaymentHandler';
import OrderSuccess from './components/Cart/OrderSuccess'
import Myorders from './components/Order/Myorders'
import OrderDetails from './components/Order/OrderDetails'
import Dashboard from './components/admin/Dashboard'
import ProductList from './components/admin/ProductList'
import CategoryList from './components/admin/CategoryList.jsx'
import NewProduct from './components/admin/NewProduct';
import NewCategory from './components/admin/NewCategory';
import UpdateProduct from './components/admin/UpdateProduct';
import UpdateCategory from './components/admin/UpdateCategory';
import OrderList from './components/admin/OrderList'
import ProcessOrder from './components/admin/ProcessOrder'
import UserList from './components/admin/UserList'
import UpdateUser from './components/admin/UpdateUser'
import ProductReviews from './components/admin/ProductReviews'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/layout/Not Found/NotFound'
import Footer from './components/layout/Footer/Footer'
function App() {
  const {isAunthenticated,user,loading}=useSelector(state=>state.user)


  useEffect(() => {
   store.dispatch(loadUser())

  }, [])

  return (
 <>
 {loading ? <Loader/> : (
     <>
     <BrowserRouter>
     <Navbar/>
       {isAunthenticated && <UserOptions user={user}/>}
     
     <Routes>
      {/* User Routes */}
       <Route element={<ProctedRout isAunthenticated={isAunthenticated} user={user}/>}>
       <Route path='/process/payment' element={<PaymentHandler/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/me/update' element={<UpdateProfile/>}/>
       <Route path='/password/update' element={<UpdatePassword/>}/>
       <Route path='/shipping' element={<Shipping/>}/>
       <Route path='/order/confirm' element={<ConfirmOrder/>}/>
       <Route path='/success' element={<OrderSuccess/>}/>
       <Route path='/orders' element={<Myorders/>}/>
       <Route path='/order/:id' element={<OrderDetails/>}/>

       {/* Admin Routes */}
       <Route path='/admin/dashboard' element={<Dashboard/>}/>
       <Route path='/admin/products' element={<ProductList/>}/>
       <Route path='/admin/categorys' element={<CategoryList/>}/>

       <Route path='/admin/product' element={<NewProduct/>}/>

       <Route path='/category' element={<NewCategory/>}/>

       <Route exact path="/favourites" element={<Favourites/>} />

       <Route path='/admin/product/:id' element={<UpdateProduct/>}/>
       <Route path='/admin/category/:id' element={<UpdateCategory/>}/>
       <Route path='/admin/orders' element={<OrderList/>}/>
       <Route path='/admin/order/:id' element={<ProcessOrder/>}/>
       <Route path='/admin/users' element={<UserList/>}/>
       <Route path='/admin/user/:id' element={<UpdateUser/>}/>
       <Route path='/admin/reviews' element={<ProductReviews/>}/>
       </Route>


       <Route path='/cart' element={<Cart/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/product/:id' element={<ProductDetails/>}/>
       <Route path='/' element={<Home user={user}/>}/>
       <Route path='/products/:keyword' element={isAunthenticated && <Products/>}/>
       <Route path='/login' element={<LoginSignup/>}/>
       <Route path='/password/forgot' element={<ForgotPassword/>}/>
       <Route path='/password/reset/:token' element={<ResetPassword/>}/>
       <Route path='/search' element={<Search/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='*' element={<NotFound/>}/>
    

       {/* <Route
          element={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}

 
     </Routes>
  <Footer/>
     </BrowserRouter>
     
     </>
 )}
 </>
  );
}

export default App;
