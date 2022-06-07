import React from "react"
import Rating from "../Rating/Rating"
import "./ReviewCard.css"
import {motion} from 'framer-motion'

// import {motion} from 'framer-motion'
import Bounce from 'react-reveal'
// import RatingCreation from "../RatingCreation/RatingCreation"


function ReviewCard ({review, onCardClick}) {

    return (    
<>
<Bounce>
    <motion.div className="container" onClick={() => onCardClick(review)}
    whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    }}
    >
    
        <div className="img-container">
        <ul>
        <li>
        <img src={review.user.profile_pic} alt="profile_pic" className="profile-pic"/>
        </li>
        <li>
        <h2>{review.user.first_name} {review.user.last_name}</h2>
        </li>
        <li>
        <p>{review.user.industry}</p>
        </li>
        <li>
        <Rating review={review}/>
        </li>
        <li>
        <p classname="review-description">{review.product_description}</p>
        </li>
        </ul>
        </div>
       
    </motion.div>
    </Bounce>
    </>

    )

}




export default ReviewCard;