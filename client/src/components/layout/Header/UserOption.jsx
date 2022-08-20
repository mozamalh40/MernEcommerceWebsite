import React,{useState} from 'react'
import './userOption.css'
import {SpeedDial,SpeedDialAction} from '@material-ui/lab'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import ExistToAppIcon from '@material-ui/icons/ExitToApp'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {logout} from '../../../actions/userAction'
import { useDispatch, useSelector } from "react-redux";


const UserOption = ({user}) => {
    const { cartItems } = useSelector((state) => state.cart);
    const { favouriteItems } = useSelector((state) => state.favourite);
    const [open, setOpen] = useState(false)
    const navigate=useNavigate()
 
    const dispatch=useDispatch()

    const options=[
        {icon:<ListAltIcon/>,name:"Orders",func:orders},
        {icon:<PersonIcon/>,name:"Profile",func:account},

        {icon: ( <ShoppingCartIcon style={{ color: cartItems.length === 0 ? "" : "tomato", }}/>),
         name: `Cart (${cartItems.length})`, func: cart,},

        {icon:<HeartIcon style={{ color: favouriteItems.length === 0 ? "" : "tomato",}}/>,
        name:`Favourite (${favouriteItems.length})`, func: favourite, },

        {icon:<ExistToAppIcon/>,name:"Logout",func:logoutUser},
   
    ]
    if(user.role==="admin"){
        options.unshift({icon:<DashboardIcon/>,name:"Dashboard",func:dashboard})
    }
    function dashboard() {
        navigate("/admin/dashboard")
    }
    function orders() {
        navigate("/orders")    
    }
    function cart() {
        navigate("/cart");
      }
      function favourite() {
        navigate("/favourites");
      }
    function account() {
        navigate("/profile")
        
    }
    function logoutUser() {
       dispatch(logout())
       toast.success("logout Successfully")
      
        
    }
  return (
    <>
    <SpeedDial
    ariaLabel='SpeedDial tooltip example'
    onClose={()=> setOpen(false)}
    onOpen={()=>setOpen(true)}
    open={open}
    direction="down"
    className='speedDial'
    style={{zIndex:"11"}}
    icon={<img 
    className='speedDialIcon'
    src={user.avatar ?  user.avatar.url : "./profileImg.png"}
    alt="profile"
    />}
    >
   {
    options.map((item)=>(
        <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func}/>
    ))
   }

    </SpeedDial>
     <ToastContainer 
     position="bottom-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     />
    </>
  )
}

export default UserOption