function PersonalInfo() {
  return (
    <div className='genInfo'>
      <input type="text" id='nameInput' placeholder='Name' />
      <input type="email" id='emailInput' placeholder='Email Address' />
      <input type="phone" id='phoneInput' placeholder='Phone Number' maxLength={10} />
    </div>
  )
}

export default PersonalInfo;
