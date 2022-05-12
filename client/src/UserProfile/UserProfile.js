import {React, useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import "../UserReviewSection/UserReviewSection"
import "./UserProfile.css"
import Rating from '../Rating/Rating'



function UserProfile ({ onCardClick }) {

  const [users, setUsers] = useState({})
  const [reviews, setReviews] = useState([])

    
    let { id } = useParams();
    console.log(id)



    useEffect(() => {
        fetch(`/users/${id}`)
        .then(resp => resp.json())
        .then(usersdata => {
            console.log(usersdata)
            console.log(usersdata.reviews)
            setUsers(usersdata)
            setReviews(usersdata.reviews)
        })
    }, [])

    
  
const allreviews = reviews.map((review => {
  return (
    <div className="container" key={review.id} onClick={() => onCardClick(review)}>

    <Rating review={review}/>
    <p className="review-description">{review.product_description}</p>

</div>
  )
}))

  
    return (
   
      <div className="user-container">
<div className="profile-header">
  <div className="profile-img">
    <img src={users.profile_pic} width="200" alt="Profile Image"/>
  </div>
  <div className="profile-nav-info">
    <h3 className="user-name">{users.username}</h3>
    <div className="address">
      <p id="state" className="state">{users.location},</p>
      <span id="country" className="country">USA.</span>
    </div>

  </div>
  {/* <div className="profile-option">
    <div className="notification">
      <i className="fa fa-bell"></i>
      <span className="alert-message">3</span>
    </div>
  </div> */}
</div>

<div className="main-bd">
  <div className="left-side">
    <div className="profile-side">
      {/* <p className="mobile-no"><i className="fa fa-phone"></i> +23470xxxxx700</p> */}
      <p className="user-mail"><i className="fa fa-envelope"></i> {users.first_name} {users.last_name}</p>
      <div className="user-bio">
        <h3>Bio</h3>
        <p className="bio">
          {users.bio}
        </p>
      </div>
      {/* <div className="profile-btn">
        <button className="chatbtn" id="chatBtn"><i className="fa fa-comment"></i> Chat</button>
        <button className="createbtn" id="Create-post"><i className="fa fa-plus"></i> Create</button>
      </div> */}
      {/* <div className="user-rating">
        <h3 className="rating">4.5</h3>
        <div className="rate">
          <div className="star-outer">
            <div className="star-inner">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <span className="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
        </div>

      </div> */}
    </div>

  </div>
  <div className="right-side">
    <div className="nav">
      <ul>
      <li onclick="tabs(0)" className="user-post active">
          Reviews
      </li>
      </ul>
      <div className="all-reviews">
      {allreviews}
      </div>
    </div>
    <div className="profile-body">
      <div className="profile-reviews tab">
       
        <h1>User reviews</h1>
      
      </div>
    </div>
  </div>
</div>
</div>

    )
}



export default UserProfile