import React from 'react'
import {CgCloseO} from 'react-icons/cg'
import {motion} from 'framer-motion'
import './Popup.css'


function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
        <CgCloseO  className="close-btn" size="70px" color="white"
                         onClick={() => props.setTrigger(false)}
                          />
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup