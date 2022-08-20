import React, { useState } from 'react'
import './Search.css'
import MetData from '../layout/MetData'

const Search = () => {
    const [keyword,setKeyword]=useState("")
    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
         window.location.replace(`/products/${keyword}`)
        }else{
         window.location.replace(`/products`)
          
        }
    }
  return (
    <>
  <MetData title="Search"/>

    <form className='searchBox' onSubmit={searchSubmitHandler}>
     <input type="text" placeholder='Search a product...' autoFocus={true} onChange={(e)=>setKeyword(e.target.value)} />
     <input type="submit" value="search" />
    </form>
    </>
  )
}

export default Search