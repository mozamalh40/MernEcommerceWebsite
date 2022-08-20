import React from 'react'

import { Outlet } from 'react-router-dom'
import LoginSignup from '../User/LoginSignup'
const ProctedRout = ({isAunthenticated,childern}) => {


return isAunthenticated?<Outlet/>:<LoginSignup/>
}

export default ProctedRout