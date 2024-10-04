import { useState } from 'react'
import './App.css'

function GenInfo() {
  return (
    <div className='genInfo'>
      <input type="text" id='nameInput' placeholder='Name' />
      <input type="email" id='emailInput' placeholder='Email Address' />
      <input type="phone" id='phoneInput' placeholder='Phone Number' maxLength={10} />
    </div>
  )
}

function App() {

  return (
    <>
      <h1>CV Application</h1>

      <h2>Information</h2>
      <GenInfo />
    </>
  )
}

export default App
