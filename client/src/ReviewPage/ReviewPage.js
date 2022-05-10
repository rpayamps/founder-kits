import {React, useEffect , useState} from "react"
import {useParams} from "react-router-dom"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Rating from "../Rating/Rating"
import Popup from "../Popup/Popup"
import "./ReviewPage.css"




function ReviewPage () {

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
        

        <div className="reviewpage-container">
        <div className="reviewpage-image-container">
         <img src={review.user.profile_pic} alt="profile_pic" className="profile-pic"/>
        </div>
        <h2>{review.user.name}</h2>
        <p>{review.user.industry}</p>
        <hr></hr>
        <p>{review.product.name}</p>

        <>
        </>
        <Rating review={review}/>
        <p classname="reviewpage-review-description">{review.product_description}</p>
        <a href={review.product.product_origin}>Link to Product</a>
        <button className ="referral-button" onClick={() => setButtonPopup(true)} trigger={buttonPopup}>Get Referral Code</button>
        <Popup trigger={buttonPopup ? true : null} setTrigger={setButtonPopup}>
        {/* <h3 id="referral_code">{review.user.referral_code}</h3> */}
        <h3>{review.product.name} Discount</h3>
      <div className={copied ? 'discount-code discount-applied' : 'discount-code'} >
        <div className="black-code">{review.user.referral_code}</div>{
          copied ? <div className="discount-copied">Copied!</div>:
            <CopyToClipboard text={review.user.referral_code} onCopy={() => setCopied(true)}>
              <div className="copy">Copy</div>
            </CopyToClipboard>
        }</div>
        </Popup>
        </div>
    )
}


export default ReviewPage;