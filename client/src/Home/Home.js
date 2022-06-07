import {React, useEffect, useState} from "react"
import { useHistory} from "react-router-dom"
import "./Home.css"
import ReviewCard from "../ReviewCard/ReviewCard"
import Bounce from 'react-reveal'
import Navbar from "../Navbar/Navbar"




function Home () {
    const [user, setUser] = useState([])
    // const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [review, setReview] = useState([])
    const [users, setUsers] = useState([])



    let history = useHistory()

    useEffect(() => {
        fetch('/user')
        .then(resp => resp.json())
        .then(userData => {
            setUser(userData)
            console.log(user)
    })
}, [])

useEffect(() => {
    fetch('/users')
    .then(resp => resp.json())
    .then(userData => {
        setUsers(userData)
        console.log(users)
})
}, [])

// useEffect(() => {
//     fetch('/products')
//     .then(resp => resp.json())
//     // .then(countriesData => {
//     //     // console.log(countriesData)
//     //     setCountries(countriesData);
//     .then( products => {
//         console.log(products)
//         setProducts(products)
//     })
// }, [])

useEffect(() => {
    fetch('/reviews')
    .then(resp => resp.json())
    // .then(countriesData => {
    //     // console.log(countriesData)
    //     setCountries(countriesData);
    .then( reviews => {
        console.log(reviews)
        setReview(reviews)
        randomArrayShuffle(reviews)
    })
}, [])

const reviewsrender = review.map((review) => {
   return <ReviewCard review={review} id={review.id} onCardClick={handleReviewClick}/ >
})

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function handleReviewClick(review) {
    history.push(`/review/${review.id}`)
    history.go(`/review/${review.id}`)
  }


  function handleSeacrhTermClick(user) {
   setSearchTerm(user.industry.toUpperCase())
  }











return (
        <>
        <div className="home">
        <div className="seacrh-bar">
            <input className="search-filter" type="text" value={searchTerm} placeholder="🔍 Search & Filter ..." onChange={event => {setSearchTerm(event.target.value)}}/>
                {users.filter((val) => {
                    if(searchTerm === "" ) {
                    return null
                } else if (val.industry?.toLowerCase()?.includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((user, key) => {
                return (
                <div className="category" key={key} onClick={() => handleSeacrhTermClick(user)}>
                <p>{user.industry}</p>
        </div>
)})}
        </div>
        <hr className="bar-line"></hr>
        <Bounce>
        <div className="review-container">
        {reviewsrender}
        </div>
        </Bounce>
        </div>
        </>
    )
}


export default Home;