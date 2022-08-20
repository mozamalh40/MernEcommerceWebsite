import React,{useState,useEffect} from 'react'
import './ForgotPassword.css'
import Loader from '../layout/loading/Loader'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import {useDispatch,useSelector} from 'react-redux'
import {clearErrors,forgotPassword} from '../../actions/userAction'
import {useAlert} from 'react-alert'
import MetData from '../layout/MetData'

const ForgotPassword = () => {
    const dispatch=useDispatch()
   
    const alert=useAlert()
    const {error,success,loading}=useSelector((state)=>state.forgotPassword)

    const [email,setEmail]=useState("")

    const forgotPasswordSubmit=(e)=>{
        e.preventDefault()
        const myForm=new FormData()
        myForm.set("email",email)
       dispatch(forgotPassword(myForm))

    }
    useEffect(() => {
        
      if(error){
        alert.error(error)
        dispatch(clearErrors())
        
      }
      if(success){
        alert.success(success);
    }
    }, [dispatch,error,alert,success])

  return (
    <>
    {loading ? <Loader/> :  (
         <>
         <MetData title="Forgot Password "/>
             <h2 className='forgotPasswordHeading' >Forgot Password</h2>
           <div className='forgotPasswordBox'>
            <div><img  className='forgotImg' src="/forgotpasss.jpg" alt="" /></div>
          <div>
           <form
            className="forgotPasswordForm form"
            onSubmit={forgotPasswordSubmit}
            >
        
          <div className='Section'>
            <div className='forgotPasswordEmail'>
             <MailOutlineIcon/>
             <input type="email" 
             placeholder='Email'
             required
             name="email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
            </div>
            <div>
            <input type="submit" 
            value="send"
            className="forgotPasswordBtn"
            /> 
            </div>
       
            </div>
            </form>
            </div>
           </div>

         </>
    )}
    </>
  )
}

export default ForgotPassword