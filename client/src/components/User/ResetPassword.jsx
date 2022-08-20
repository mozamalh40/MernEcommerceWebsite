import React,{useState,useEffect} from 'react'
import './ResetPassword.css'
import Loader from '../layout/loading/Loader'
import {useDispatch,useSelector} from 'react-redux'
import {clearErrors,resetPassword} from '../../actions/userAction'
import {useAlert} from 'react-alert'
import { useNavigate } from 'react-router-dom'
import MetData from '../layout/MetData'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import {TiTickOutline} from  'react-icons/ti'
import { loadUser } from '../../actions/userAction'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const alert=useAlert()  
    const param =useParams()
    const {error,message,loading}=useSelector((state)=>state.forgotPassword)
   
     const [password, setPassword] = useState("")
     const [confirmPassword, setConfirmPassword] = useState("")

    const resetPasswordSubmit=(e)=>{
        e.preventDefault()
        const myForm=new FormData()
        myForm.set("password",password)
        myForm.set("confirmPassword",confirmPassword)
       dispatch(resetPassword(param.token,myForm))

    }

        useEffect(() => {
          
          if(error){
            alert.error(error)
            dispatch(clearErrors())
            
          }
          if(message){
              alert.success("Password Update Successfully")
              navigate("/")
              dispatch(loadUser())
         
        }
        }, [dispatch,error,navigate,alert,message])
        
  return (
    <>
    {loading ? <Loader/> :  (
        <>
        <MetData title="Change Password"/>
         <div className='resetPasswordContainer'>
          <div className='resetPasswordBox'>
           
            <div className='S1'>
            <h2 className='resetPasswordHeading' >Update Password</h2>
                <h4>Password must contain</h4>
                <div>
                    
                    <h5><TiTickOutline/> At least 8 characters</h5>
                </div>
                <div>
                 

                    <h5><TiTickOutline/> At least 1 lowercase letter(a-z)</h5>
                </div>
                <div>

                 <h5><TiTickOutline/> At least 1 uppercase letter(A-Z)</h5>
                </div>
                <div>

                <h5><TiTickOutline/> At least 1 number(1-10)</h5>
                </div>
                
            </div>
            <div className='S2'>
          <form
           className="resetPasswordForm"
           encType="multipart/form-data"
           onSubmit={resetPasswordSubmit}
           >
        
 
        <div className='resetPassword'>
         <LockOpenIcon/>
         <input type="password" 
         placeholder='New Password'
         required
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
        </div>
        <div className='resetPassword'>
         <LockOpenIcon/>
         <input type="password" 
         placeholder='Confirm Password'
         required
         value={confirmPassword}
         onChange={(e)=>setConfirmPassword(e.target.value)}
         />
        </div>

          <div>
           <input type="submit" 
           value="Update"
           className="resetPasswordBtn"
           /> 
           </div>
           </form>
           </div>
          </div>
          </div>
        </>
   )}
   </>
  )
}


export default ResetPassword