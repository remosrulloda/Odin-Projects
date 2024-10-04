import { useState } from 'react'
import './Input.css';

function GenInfoInput() {
    return (
        <div className='genInfoInput'>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='email' />
            <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxLength={10} placeholder='Phone Number' />
        </div>
    )
}




export default GenInfoInput;