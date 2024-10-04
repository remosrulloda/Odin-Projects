import { useState } from 'react'
import DatePicker from "react-datepicker";
import './App.css'
import "react-datepicker/dist/react-datepicker.css";


function GenInfo() {
  return (
    <div className='infoBox'>
      <input type="text" id='nameInput' placeholder='Name' />
      <input type="email" id='emailInput' placeholder='Email Address' />
      <input type="phone" id='phoneInput' placeholder='Phone Number' maxLength={10} />
    </div>
  )
}

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

function Education() {
  return (
    <div className="infoBox">
      <input type="text" id='schoolNameInput' placeholder='School Name' />
      <input type="text" id='titleOfStudyInput' placeholder='Title of Study' />
      <Calendar />
    </div>
  )
}

function Experience() {
  return (
    <div className="infoBox">
      <input type="text" id='companyInput' placeholder='Company Name' />
      <input type="text" id='positionInput' placeholder='Position Title' />
      <Calendar />
      <Calendar />
    </div>
  )
}


function App() {

  return (
    <>
      <h1>CV Application</h1>
      <h2>Information</h2>
      <GenInfo />
      <h2>Education</h2>
      <Education />
      <h2>Experience</h2>
      <Experience />
    </>
  )
}

export default App
