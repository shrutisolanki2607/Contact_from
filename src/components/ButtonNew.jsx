import React from 'react';
import './Button.css' ;

const ButtonNew = (props) => {
  return (
    <div>
        <button className = "call_btn" >
            {props.icon}
            {props.text}
        </button>
    </div>
  )
}

export default ButtonNew ;