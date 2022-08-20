import React,{useRef,useState,useEffect} from 'react'
import './LoginSignup.css'
import Loader from '../layout/loading/Loader'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import FaceIcon from '@material-ui/icons/Face'
import {useDispatch,useSelector} from 'react-redux'
import {clearErrors,login,register} from '../../actions/userAction'

import { useNavigate } from 'react-router-dom'
import LockIcon from '@material-ui/icons/Lock'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginSignup = () => {
    const dispatch=useDispatch()

    const navigate=useNavigate()

    const {error,loading,isAunthenticated}=useSelector((state)=>state.user)
    // for login
    const loginTab=useRef(null)
    const registerTab=useRef(null)
    const switcherTab=useRef(null)

    const [loginEmail,setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")

// for register
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    
    const {name,email,password}=user
    const [avatar,setAvatar]=useState()
    const [avatarPreview,setAvatarPreview]=useState("/profileImg.png")

    const loginSubmit=(e)=>{
        e.preventDefault()
      dispatch(login(loginEmail,loginPassword))
    }


    const registerSubmit=(e)=>{
        e.preventDefault()
        const myForm=new FormData()
        myForm.set("name",name)
        myForm.set("email",email)
        myForm.set("password",password)
        myForm.set("avatar",avatar)
       dispatch(register(myForm))

    }
const registerDataChange=(e)=>{
if(e.target.name==="avatar"){
 const reader=new FileReader()
 reader.onload=()=>{
    if(reader.readyState===2){
        setAvatarPreview(reader.result)
        setAvatar(reader.result)
    }
 }
 const file=e.target.files[0]

   reader.readAsDataURL(file)
 
}else{
    setUser({...user,[e.target.name]:e.target.value})
}
}


useEffect(() => {
  if(error){
    toast.error(error)
    dispatch(clearErrors())
    
  }
  if(isAunthenticated){
   navigate("/profile")
}
}, [dispatch,error,navigate,isAunthenticated])

    const switchTabs=(e,tab)=>{
        if(tab==='login'){
            switcherTab.current.classList.add("shiftToNeutral")
            switcherTab.current.classList.remove("shiftToRight")

            registerTab.current.classList.remove("shiftToNeutralForm")
            loginTab.current.classList.remove("shiftToLeft")
        }

        if(tab==='register'){
            switcherTab.current.classList.add("shiftToRight")
            switcherTab.current.classList.remove("shiftToNeutral")

            registerTab.current.classList.add("shiftToNeutralForm")
            loginTab.current.classList.add("shiftToLeft")
        }
    }
  return (
  <>
  {loading ? <Loader/> : (
     <>
     <div className='LoginSignUpContainer'>
      <div className='LoginSignUpBox'>
       <div>
          <div className='login_signUp_toggle'>
         <p onClick={(e)=>switchTabs(e,"login")}>LOGIN</p>
         <p onClick={(e)=>switchTabs(e,"register")}>RIGESTER</p>
          </div>
          <button ref={switcherTab}></button>
       </div>
       <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
        <div className='loginEmail'>
          <MailOutlineIcon />
          <input type="eamil" 
          placeholder='Email'
          required
          value={loginEmail}
          onChange={(e)=>setLoginEmail(e.target.value)}
          
          />
        </div>
        <div className='loginPassword'>
         <LockIcon className='lock'/>
         <input type="password" 
         placeholder='Password'
         required
         value={loginPassword}
         onChange={(e)=>setLoginPassword(e.target.value)}
         />
        </div>
         <Link to="/password/forgot">Forgot Password ?</Link>
        <input type="submit" value="login" className="loginBtn" />
       </form>
       <form
       className="signUpForm"
       ref={registerTab}
       encType="multipart/form-data"
       onSubmit={registerSubmit}
       >
       <div className='signupForm'>
          <FaceIcon/>
          <input type="text"
          placeholder='Name'
          required
          name="name"
          value={name}
          onChange={registerDataChange}
          />
       </div>
       <div className='signUpEmail'>
        <MailOutlineIcon/>
        <input type="email" 
        placeholder='Email'
        required
        name="email"
        value={email}
        onChange={registerDataChange}
        />
       </div>
       <div id='lock'>
          <LockOpenIcon className='lock'/>
          <input type="password" 
        placeholder='Password'
        required
        name="password"
        value={password}
        onChange={registerDataChange}
        />
       </div>
       <div id="registerImage">
       <img src={avatarPreview} alt="Avatar Preview" />
       <input
         type="file"
         name="avatar"
         accept="image/*"
          onChange={registerDataChange}
       />
     </div>
       <input type="submit" 
       value="register"
       className="signUpBtn"
       
       /> 
  
       </form>
      </div>
     </div>
     </>
  )}
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

export default LoginSignup


