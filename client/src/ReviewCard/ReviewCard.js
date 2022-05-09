import React from "react"
import Rating from "../Rating/Rating"
import "./ReviewCard.css"


function ReviewCard ({review, onCardClick}) {

    return (

    
    <div className="container" onClick={() => onCardClick(review)}>
    
        <div className="img-container">
        <img src={review.user.profile_pic} alt="profile_pic" className="profile-pic"/>
        </div>
        <h2>{review.user.name}</h2>
        <p>{review.user.industry}</p>
        <Rating review={review}/>
        <p classname="review-description">{review.product_description}</p>
    
    </div>


    )

}




export default ReviewCard;