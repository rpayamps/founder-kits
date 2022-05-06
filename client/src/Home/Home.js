import {React, useEffect, useState} from "react"
import "./Home.css"




function Home () {
    const [user, setUser] = useState([])
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('/user')
        .then(resp => resp.json())
        .then(userData => {
            setUser(userData)
            console.log(user)
    })
}, [])

useEffect(() => {
    fetch('/products')
    .then(resp => resp.json())
    // .then(countriesData => {
    //     // console.log(countriesData)
    //     setCountries(countriesData);
    .then( products => {
        console.log(products)
        setProducts(products)
    })
}, [])

useEffect(() => {
    fetch('/reviews]')
    .then(resp => resp.json())
    // .then(countriesData => {
    //     // console.log(countriesData)
    //     setCountries(countriesData);
    .then( reviews => {
        console.log(reviews)
        setReview(reviews)
    })
}, [])




    return (
        <>
        <div>
            Home
            <input type="text" placeholder="🔍  Search & Filter ..." onChange={(event) => {setSearchTerm(event.target.value)}}></input>
            {products.filter((val)=>{
                if(searchTerm === "") {
                return null} else if (val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((product) => {
            return <div className="category" key={product.id}>
            <p>{product.category}</p>
            </div>
})}
        </div>
        <div className="review-container">
        <div className="review">
    
        </div>
        </div>
        </>
    )
}


export default Home