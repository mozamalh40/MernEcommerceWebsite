import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getProduct,clearErrors} from '../../actions/productAction'
import ProductCard from '../layout/ProductCard/ProductCard'
import Loader from '../layout/loading/Loader'
import { useEffect } from 'react'
import './products.css'
import { useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MetData from '../layout/MetData'
import {getCategory,} from "../../actions/categoryAction";



// price filteration pending//////////////////////////////////////////////////////////////////////////
const Products = () => {





const [category, setCategory] = useState("")


  //pagination
const [currentPage,setCurretPage]=useState(1)
  //price
const [price,setPrice]=useState([0,550])
  ///ratings
const [ratings, setRatings] = useState(0)

  //for the filteration reducs part/////////////////
    const dispatch=useDispatch()

   const params=useParams()

    const {products,loading,error,productsCount,resultPerPage}=useSelector((state)=>state.products)
    const { categorys } = useSelector((state) => state.categorys);

    const keyword=params.keyword

    useEffect(() => {

      if(error){
        toast.error(error)
        dispatch(clearErrors())
      }
      dispatch(getProduct(keyword,currentPage,price,category,ratings))
      dispatch(getCategory())
    }, [dispatch,keyword,currentPage,price,category,ratings,error])

    //pagination
const setCurrentPageNo=(e)=>{
  setCurretPage(e)
}


const priceHandler=(event,newPrice)=>{
  setPrice(newPrice)
}
  return (
    <>
    {/* show all products......................................................... */}
    {loading ? <Loader/> : (
        <>
        <MetData title="Products"/>
        <h2 className='productsHeading'>Products</h2>
        <div className='products'  >
            {products && products.map((product)=>(
              <ProductCard product={product} key={product._id}/>
            ))}
        </div>
        {/* price filteration///////////////////////////////////////////////////////////// */}
  
         <div className="filterBox"  >
         <fieldset>
        <Typography component="legend" style={{color:'tomato'}}>Price</Typography>
        <Slider aria-label="Volume" value={price} onChange={priceHandler}  min={0}
        max={50000}   valueLabelDisplay="auto" aria-labelledby='range-slider' />
          </fieldset>
        </div> 
      
  {/* filteration with categories/////////////////////////////////////////////////////////////////// */}
        <div className='catBox'  >
  <Typography className='cat' style={{color:'tomato'}}>Categories</Typography>
  <ul className='Categorybox '>
    {categorys&&categorys.map((category)=>(
      <li
      className='category-link'
      key={category._id}
      onClick={()=> setCategory(category.name)}
      >
        {category.name}
      </li>
    ))}
  </ul>
  
   {/* filteration from ratings//////////////////////////////////////////// */}
  <fieldset>
    <Typography className='cat' component="legend" style={{color:'tomato'}}>Rating Above</Typography>
    <Slider
    value={ratings}
    onChange={(e,newRating)=>{
      setRatings(newRating)   
    }}
    aria-labelledby="continuous-slider"
    min={0}
    max={5}
    valueLabelDisplay='auto'
    />
  </fieldset>
  </div>
  
   {/* pagination................................................................................ */}
     {resultPerPage < productsCount && (
       <div className='paginationBox'>
       <Pagination
       activePage={currentPage}
       itemsCountPerPage={resultPerPage}
       totalItemsCount={productsCount}
       onChange={setCurrentPageNo}
       nextPageText="Next"
       prevPageText="Prev"
       firstPageText="1st"
       lastPageText="Last"
       itemClass='page-item'
       linkClass='page-link'
       activeClass='pageItemActive'
       activeLinkClass='pageLinkActive'
       />
 </div>
     )} 
        </>
    )}
    <ToastContainer 
        position="bottom-center"
        autoClose={55}
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

export default Products