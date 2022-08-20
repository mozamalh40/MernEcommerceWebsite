import React from 'react'
import ReactStars from 'react-rating-stars-component'
import profilepng from '../../images/profileImg.png'
const ReviewCard = ({review}) => {
    const options={
        edit:false,
        color:"white",
        activeColor:"tomato",
        size:window.innerWidth<600?20:25,
        value:review.rating,
        isHalf:true
    }
  
  return (
    <>
    <div className='reviewCard'>
        <img src={profilepng} alt="" />
        <p>{review.name}</p>
        <ReactStars {...options}/>
        <span>{review.comment}</span>
    </div>
    </>
  )
}

export default ReviewCard