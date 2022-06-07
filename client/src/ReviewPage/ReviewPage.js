import {React, useEffect , useState} from "react"
import {useParams} from "react-router-dom"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Rating from "../Rating/Rating"
import Popup from "../Popup/Popup"
import {motion} from "framer-motion"
import "./ReviewPage.css"




function ReviewPage ({onUserClick }) {

    const [review, setReview] = useState([])
    const [buttonPopup, setButtonPopup] = useState(false)
    const [copied, setCopied] = useState(false);

    let { id } = useParams();
    console.log(id)



  



    useEffect(() => {
        fetch(`/reviews/${id}`)
        .then(resp => resp.json())
        .then(reviewdata => {
            console.log(reviewdata)
            setReview(reviewdata)
        })
    }, [])





   if (!review || !review.user) {
       return null
   } 
    return (
        

        <motion.div className="reviewpage-container"
        initial={{ y: "-100vh"}}
        animate={{ y: 0}}
        transition={{ type: "spring", stiffness: 50, damping: 10}}
        >
        <div className="reviewpage-image-container">
         <img src={review.user.profile_pic} alt="profile_pic" onClick={() => onUserClick(review.user.id)} className="profile-pic"  />
        </div>
        <h2 className="review-page-username">{review.user.first_name}  {review.user.last_name}</h2>
        <p className="review-page-industry">{review.user.industry}</p>
        <hr className="reviewpage-line"></hr>
        <p className="review-page-product-name">{review.product.name}</p>
        <Rating review={review}/>
        <p classname="reviewpage-review-description">{review.product_description}</p>
        <motion.a className="product-link"href={review.product.product_origin}
        whileHover={{scale: 1.1,
          textShadow: "0 0 8px 8px rgb(225,225,255)"
        }}
        >Link to Product</motion.a>
        <motion.button className ="referral-button" onClick={() => setButtonPopup(true)} trigger={buttonPopup}
        whileHover={{
          scale: 1.1,
          textShadow: "0 0 8px 8px rgb(225,225,255)",
          boxShadow: "0 0 8px 8px rgb(225,225,255)",
        }}
        >Get Referral Code</motion.button>
        <Popup trigger={buttonPopup ? true : null} setTrigger={setButtonPopup}>
        {/* <h3 id="referral_code">{review.user.referral_code}</h3> */}
        {/* <h3>{review.product.name} Discount</h3> */}
      <div className={copied ? 'discount-code discount-applied' : 'discount-code'} >
        <div className="black-code">{review.user.referral_code}</div>{
          copied ? <div className="discount-copied">Copied!</div>:
            <CopyToClipboard text={review.user.referral_code} onCopy={() => setCopied(true)}>
              <div className="copy">Copy</div>
            </CopyToClipboard>
        }</div>
        </Popup>
        </motion.div>
    )
}


export default ReviewPage;