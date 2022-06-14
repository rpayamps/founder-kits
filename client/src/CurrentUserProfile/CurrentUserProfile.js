import {React, useEffect, useState} from "react"
import {motion} from 'framer-motion'
import {AiOutlineDelete} from 'react-icons/ai'
import Fade from 'react-reveal'
import Rating from '../Rating/Rating'
import RatingCreation from '../RatingCreation/RatingCreation'
import "./CurrentUserProfile.css"



function CurrentUserProfile ({onCardClick}) {

  const pull_data = (data) => {
    setRating(data)
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }

    //On Load Displayed Data
    const [user, setUser] = useState([])
    const [reviews, setReviews] = useState([])

    //Curent User Information 
    const [location, setLocation] = useState(user.location)
    const [bio, setBio] = useState(user.bio)
    const [occupation, setOccupation] = useState(user.occupation)
    const [referral_code, setReferral_code] = useState(user.referral_code)
    const [industry, setIndustry] = useState(user.industry)
    const [profile_pic, setProfile_pic] = useState(user.profile_pic)
    const [username, setUsername] = useState(user.username)

    //Profile Tabs toggler 
    const [ toggleState , setToggleState] = useState(2)
    const toggleTab = (index) => {
      setToggleState(index);
      console.log(index)
    };


    //Information for Product/Review Creation
    const [product_description, setProduct_description] = useState("")
    const [description, setDescription] = useState("")
    const [vendor, setVendor] = useState("")
    const [productname, setProductname] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [product_origin, setProduct_origin] = useState("")
    const [rating, setRating] = useState(0)

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


  function handleCreateReview(e) {
    e.preventDefault();
    fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_description: product_description,
        rating: rating,
        name: productname,
        descripition: description,
        product_origin: product_origin,
        vendor: vendor,
        brand: brand,
        category: category,
      }),
        })
        .then((r) => r.json())
        .then(json => console.log(json))
}
 


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
    })
      .then((r) => r.json())
      .then(json => {
        console.log(json)
        console.log(pull_data)
      })
  }





  
  const allreviews = reviews.map((review => {
    

  function handleDeleteReview () {
    console.log("delete review clicked")
    fetch(`/reviews/` + review.id, {
      method: "DELETE",
    })
  }
  
    return (
      <>
      <Fade bottom delay={2000}>
      <motion.div className="profile-review-container" key={review.id} onClick={() => onCardClick(review)}
      whileHover={{ scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      }}
      >
      <Rating review={review}/>
      <p className="review-description">{review.product_description}</p>
  </motion.div>
  <motion.div className="review-delete-button" 
  whileHover={{ scale: 2,
    color: "0px 0px 8px rgb(255,255,255)",
    backgroundColor: "0px 0px 8px rgb(255, 255, 255)",
  }}>
  <AiOutlineDelete onClick={handleDeleteReview} style={{size: "35px", color: "white"}}/>
  </motion.div>
  </Fade>
  </>
    )
  }))


    return (
        <>

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
                      <h3 className="bio-title">Bio</h3>
                      <p className="bio">
                        {user.bio}
                      </p>
                    </div>
                  </div>
                </div>

    <div className="right-side">
      <Fade top delay={1000}>
      <div className="nav">
       <ul>
          <motion.li className="create-review" onClick={() => toggleTab(1)}
          whileHover={{ scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          > Create Review</motion.li>
          <motion.li className="user-review" onClick={() => toggleTab(2)}
           whileHover={{ scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          >Reviews</motion.li>
          <motion.li  className="user-setting" onClick={() => toggleTab(3)}
           whileHover={{ scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          > Settings</motion.li>
      </ul>
      </div>
      </Fade>

      
        <div className={toggleState === 1 ? "profile-body active-content" : "content"}>
         <Fade>
          <h1>Create Review</h1>
          </Fade>
          <Fade left>
          <div className="create-review-form-container">
          <form className="create-review-form" onSubmit={handleCreateReview}>
            <div className="group">
              <input className="form-control" type="text"  placeholder="The Products Name?" value={productname} onChange={(e) => setProductname(e.target.value)}/>
            </div>
            <div className="group">
              <input   className="form-control"  type="text"  value={product_description} placeholder="Products Function" onChange={(e) => setProduct_description(e.target.value)} />
            </div>
            <div className ="group">
              <input  className="form-control"  type="text" value={description} placeholder="Products Description"  onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="group">
              <input  className="form-control"  type="text" value={product_origin} placeholder="Link to Product" onChange={(e) => setProduct_origin(e.target.value)} />
            </div>
            <div className="group">
              <input  className="form-control"  type="text" value={brand} placeholder="Products Company Name"  onChange={(e) => setBrand(e.target.value)} />
            </div>
            <div className="group">
              <input  className="form-control"  type="text" value={category} placeholder="Products Category"  onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="group">
              <input className="form-control"   type="text" value={vendor} placeholder="Products Vendor"  onChange={(e) => setVendor(e.target.value)} />
            </div>
            <div className="group-rating">
              <RatingCreation func={pull_data}> 
              <input  className="form-control"  type="number" value={pull_data} placeholder="" />
              </RatingCreation>
            </div>
            <div className="sumbit-update-button-container">
            <motion.button className="sumbit-update-button" type="sumbit" 
            whileHover={{ scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            >Sumbit Review</motion.button>
            </div>
          </form>
        </div>
        </Fade>
        </div>
        <div className={toggleState === 2 ? "profile-body active-content" : "content"}>
          <Fade>
          <h1>User reviews</h1>
          </Fade>
          {allreviews}
        </div>
        <div className={toggleState === 3 ? "profile-body active-content" : "content"}>
          <div className="account-setting">
            <Fade>
            <h1>Edit Profile</h1>
            </Fade>
          <Fade right>
          <div className="update-profile-form-container">
          <form className="update-profile-form" onSubmit={handleUpdateSubmit}>
            <div className="group">
              <input className="form-control" type="text"  placeholder="Update Your Current Location" value={location} onChange={(e) => setLocation(e.target.value )}/>
            </div>
            <div className="group">
              <input   className="form-control"  type="text"  placeholder="Update Your Current Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
            </div>
            <div className ="group">
              <input  className="form-control"  type="text" value={bio} placeholder="Update Your Bio"  onChange={(e) => setBio(e.target.value)} />
            </div>
            <div className="group">
              <input  className="form-control"  type="text" value={referral_code} placeholder=" Update Your Referral Code" onChange={(e) => setReferral_code(e.target.value)} />
            </div>
            <div className="group">
              <input  className="form-control"  type="text" value={industry} placeholder="Update Your Industry"  onChange={(e) => setIndustry(e.target.value)} />
            </div>
            <div className="group">
              <input  className="form-control"  type="text" value={profile_pic} placeholder="Update Your Profile Picture"  onChange={(e) => setProfile_pic(e.target.value)} />
            </div>
            <div className="group">
              <input className="form-control"   type="text" value={username} placeholder="Update Your Username"  onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="sumbit-update-button-container">
            <motion.button className="sumbit-update-button" type="sumbit" 
            whileHover={{ scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            >Sumbit Update</motion.button>
            </div>
          </form>
          </div>
          </Fade>
          </div>
        </div>
      </div>
  </div>
  </>




    )
}



export default CurrentUserProfile