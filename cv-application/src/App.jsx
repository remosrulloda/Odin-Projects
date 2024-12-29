import { useState } from 'react'
import DatePicker from "react-datepicker";
import './App.css'
import "react-datepicker/dist/react-datepicker.css";


function GenInfo({ handleChange, data }) {
  return (
    <div className="infoBox">
      <input
        type="text"
        id="nameInput"
        placeholder="Name"
        value={data.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <input
        type="email"
        id="emailInput"
        placeholder="Email Address"
        value={data.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <input
        type="tel"
        id="phoneInput"
        placeholder="Phone Number"
        maxLength={10}
        value={data.phoneNum}
        onChange={(e) => handleChange("phoneNum", e.target.value)}
      />
    </div>
  );
}

function Education({handleChange, data}) {
  return (
    <div className="infoBox">
      <input type="text" id='schoolNameInput' placeholder='School Name' value={data.schoolName} onChange={(e) => handleChange("schoolName", e.target.value)}/>
      <input type="text" id='titleOfStudyInput' placeholder='Title of Study' value={data.studyTitle} onChange={(e) => handleChange("titleOfStudy", e.target.value)}/>
      <Calendar label="Start Date" selectedDate={data.startDate} onChange={(date) => handleChange("startDate", date)}/>
      <Calendar label="End Date" selectedDate={data.endDate} onChange={(date) => handleChange("endDate", date)}/>
    </div>
  )
}


function Calendar({label, selectedDate, onChange}) {
  return (
    <div className="calendarWrapper">
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        className="datePicker"
      />
    </div>
  );
};



function Experience({handleChange, data}) {
  return (
    <div className="infoBox">
      <input type="text" id='companyInput' placeholder='Company Name' value={data.companyName} onChange={(e) => handleChange("companyName", e.target.value)}/>
      <input type="text" id='positionInput' placeholder='Position Title' value={data.positionTitle} onChange={(e) => handleChange("positionTitle", e.target.value)}/>
      <Calendar 
        label="Start Date"
        selectedDate={data.startDateExperience}
        onChange={(date) => handleChange("startDateExperience", date)}
      />
      <Calendar 
        label="End Date"
        selectedDate={data.endDateExperience}
        onChange={(date) => handleChange("endDateExperience", date)}
      />
    </div>
  )
}

function EditSkill({skill, onUpdate, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState(skill);
  
  const handleUpdate = () => {
    onUpdate(newSkill);
    setIsEditing(false);
  }

  return (
    <div className="editSkill">
      {isEditing ? (
        <>
          <input 
            type = "text"
            value = {newSkill}
            onChange= {(e) => setNewSkill(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>{skill}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )
    }
    </div>
  );
}

function Skills({handleChange, data}) {

  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() !== "") {
      handleChange("skills", [...data.skills, skillInput.trim()]);
      setSkillInput("");
    }
  }

  const updateSkill = (index, newSkill) => {
    const updatedSkills = [...data.skills];
    updatedSkills[index] = newSkill;
    handleChange("skills", updatedSkills);
  };

  const deleteSkill = (index) => {
    const updatedSkills = data.skills.filter((_, i) => i !== index);
    handleChange("skills", updatedSkills);
  }

  return (
    <div className="infoBox">
      <input 
        type="text" 
        id='skillInput' 
        placeholder='Skill' 
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
      />
      <button id="newSkillBtn" onClick={addSkill}>Add New Skill</button>

    {data.skills.map((skill, index) => (
      <EditSkill 
        key={index}
        skill={skill}
        onUpdate={(newSkill) => updateSkill(index, newSkill)}
        onDelete={() => deleteSkill(index)}
      />
    ))}
    </div>
  )
}

function Render({data}) {
  return (
      <>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phoneNum}</p>

      <div>
        <h2>Education</h2>
        <p>{data.schoolName}</p>
        <p>{data.titleOfStudy}</p>
        <p>{data.startDate.toLocaleDateString("en-US", {month: 'short', year: 'numeric'})} - {data.endDate.toLocaleDateString("en-US", {month: 'short', year: 'numeric'})}</p>
      </div>

      <div>
        <h2>Experience</h2>
        <p>{data.companyName}</p>
        <p>{data.positionTitle}</p>
        <p>{data.startDateExperience.toLocaleDateString("en-US", {month: 'short', year: 'numeric'})} - {data.endDateExperience.toLocaleDateString("en-US", {month: 'short', year: 'numeric'})}</p>
      </div>
      
      <div>
        <h2>Technical Skills</h2>
        <ul>
         {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      

      </>
  );
}


function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    schoolName: "",
    titleOfStudy: "",
    startDate: new Date(),
    endDate: new Date(),
    companyName: "",
    positionTitle: "",
    startDateExperience: new Date(),
    endDateExperience: new Date(),
    skills: [],
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value});
  }

  return (
    <div className="layout">
      <div className="left">
        <h1>CV Application</h1>
        <h2>Information</h2>
        <GenInfo handleChange={handleChange} data={formData}/>
        <h2>Education</h2>
        <Education handleChange={handleChange} data={formData}/>
        <h2>Experience</h2>
        <Experience handleChange={handleChange} data={formData}/>
        <h2>Skills</h2>
        <Skills handleChange={handleChange} data={formData}/>
      </div>
      <div className="right">
        <Render data={formData}/>
      </div>
    
    </div>
  )
}

export default App;
