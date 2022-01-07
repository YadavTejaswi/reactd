import React from 'react'


function Button(props) {
    return (
        <>
        <div className='container py-5 px-5'>
          <button className='btn-primary'>{props.buttonText}</button> 
          </div> 
        </>
    )
}

export default Button;
