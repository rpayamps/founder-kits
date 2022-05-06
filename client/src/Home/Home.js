import {React, useEffect, useState} from "react"
import Navbar from "../Navbar/Navbar"
import "./Home.css"




function Home () {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('/user')
        .then(resp => resp.json())
        .then(userData => {
            setUser(userData)
            console.log(user)
    })
}, [])




    return (
        <div>
            <Navbar user={user}/>
            Home
        
        </div>
    )
}


export default Home