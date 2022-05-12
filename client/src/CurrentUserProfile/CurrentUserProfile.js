import {React, useEffect, useState} from "react"
import Rating from '../Rating/Rating'
import "./CurrentUserProfile.css"



function CurrentUserProfile ({onCardClick}) {

    // let { path, url } = useRouteMatch();


    const [user, setUser] = useState([])

    const [reviews, setReviews] = useState([])
  

    const [location, setLocation] = useState("")
    const [bio, setBio] = useState("")
    const [occupation, setOccupation] = useState("")
    const [referral_code, setReferral_code] = useState("")
    const [industry, setIndustry] = useState("")
    const [profile_pic, setProfile_pic] = useState("")
    const [username, setUsername] = useState("")

    const [ toggleState , setToggleState] = useState(2)
    const toggleTab = (index) => {
      setToggleState(index);
      console.log(index)
    };

    useEffect(() => {
        fetch("/me").then((resp) => {
          if (resp.ok) {
            resp.json().then((user) => setUser(user))
            console.log(user)
            console.log("Current User");
          }
          
        });
      }, []);

      
      useEffect(() => {
          fetch('/me')
          .then(resp => resp.json())
          .then(userData => {
              setReviews(userData.reviews)
              console.log(userData)
      })
  }, [])

 


  function handleUpdateSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      location: location,
      occupation: occupation,
       bio: bio,
       referral_code: referral_code,
       industry: industry,
       profile_pic: profile_pic,
       username: username
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((r) => r.json())
      .then(json => console.log(json))
  }


  
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
      <img src={user.profile_pic} width="200" alt="Profile Image"/>
    </div>
    <div className="profile-nav-info">
      <h3 className="user-name">{user.username}</h3>
      <div className="address">
        <p id="state" className="state">{user.location},</p>
        <span id="country" className="country">USA.</span>
      </div>

    </div>
  </div>

  <div className="main-bd">
    <div className="left-side">
      <div className="profile-side">
        {/* <p className="mobile-no"><i className="fa fa-phone"></i> +23470xxxxx700</p> */}
        <p className="user-mail"><i className="fa fa-envelope"></i> {user.first_name} {user.last_name}</p>
        <div className="user-bio">
          <h3>Bio</h3>
          <p className="bio">
            {user.bio}
          </p>
        </div>
      </div>

    </div>
    <div className="right-side">
   
      <div className="nav">
       <ul>
          <li className="create-review" onClick={() => toggleTab(1)}> Create Review</li>
          <li className="user-review" onClick={() => toggleTab(2)}>Reviews</li>
          <li  className="user-setting" onClick={() => toggleTab(3)}> Settings</li>
      </ul>
      </div>

      
      <div >
        <div className={toggleState === 1 ? "profile-body active-content" : "content"}>
          <h1>Create Review</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quia sunt itaque ut libero cupiditate ullam qui velit laborum placeat doloribus, non tempore nisi ratione error rem minima ducimus. Accusamus adipisci quasi at itaque repellat sed
            magni eius magnam repellendus. Quidem inventore repudiandae sunt odit. Aliquid facilis fugiat earum ex officia eveniet, nisi, similique ad ullam repudiandae molestias aspernatur qui autem, nam? Cupiditate ut quasi iste, eos perspiciatis maiores
            molestiae.</p>
        </div>
        <div className={toggleState === 2 ? "profile-body active-content" : "content"}>
          <h1>User reviews</h1>
          {allreviews}
          user reviews
        </div>
        <div className={toggleState === 3 ? "profile-body active-content" : "content"}>
          <div className="account-setting">
            <h1>Edit Profile</h1>
          <form onSubmit={handleUpdateSubmit}>
            <div class ="group">
              <input type="text" id="location"  onChange={(e) => setLocation(e.target.value)}/>
              <label>Update Your Current Location </label>
            </div>
            <div class ="group">
              <input type="text" id="occupation"  onChange={(e) => setOccupation(e.target.value)} />
              <label>Update Your Current Occupation </label>
            </div>
            <div class ="group">
              <input type="text" value={bio}  onChange={(e) => setBio(e.target.value)} />
              <label>Update Your Bio </label>
            </div>
            <div class ="group">
              <input type="text" value={referral_code}  onChange={(e) => setReferral_code(e.target.value)} />
              <label> Update Your referral_code </label>
            </div>
            <div class ="group">
              <input type="text" value={industry}  onChange={(e) => setIndustry(e.target.value)} />
              <label>Update Your Industry </label>
            </div>
            <div class ="group">
              <input type="text" value={profile_pic}  onChange={(e) => setProfile_pic(e.target.value)} />
              <label>Update Your Profile Picture </label>
            </div>
            <div class ="group">
              <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)} />
              <label>Update Your Username </label>
            </div>
            <button className="login-button" type="sumbit" class="button buttonBlue">Sumbit Update</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}



export default CurrentUserProfile