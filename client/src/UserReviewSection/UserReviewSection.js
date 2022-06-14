import {React, useEffect} from "react"
import {useParams} from "react-router-dom"
import Rating from "../Rating/Rating"
import './UserReview.css'



function UserReviewSection ({onCardClick}) {

    const [ users, setUsers ] = ([])

    let { id, ReviewSection } = useParams();

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(resp => resp.json())
        .then( userData =>{
            setUsers(userData)
        })
    })

    const reviews = users.map((review) => {
        return <div className="user-proflie-container" onClick={() => onCardClick(review)}>
    
        <div className="img-container">
        <img src={review.user.profile_pic} alt="profile_pic" className="profile-pic"/>
        </div>
        <h2>{review.user.first_name} {review.user.last_name}</h2>
        <p>{review.user.industry}</p>
        <Rating review={review}/>
        <p classname="review-description">{review.product_description}</p>
    
    </div>
    })

        return (
            <div>
                {ReviewSection}
                {reviews}
            </div>
        )
}



export default UserReviewSection;