import { useState } from 'react'
import DatePicker from "react-datepicker";
import './App.css'
import "react-datepicker/dist/react-datepicker.css";


function GenInfo({ handleChange, data }) {
  return (
    <div className="infoBox">
      <label>Full Name</label>
      <input
        type="text"
        id="nameInput"
        placeholder="Name"
        value={data.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        id="emailInput"
        placeholder="Email Address"
        value={data.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <label>Phone Number</label>
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

function Education({ handleChange, data }) {
  const [educationInput, setEducationInput] = useState({
    schoolName: "",
    titleOfStudy: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const addEducation = () => {
    handleChange("education", [...data.education, educationInput]);
    setEducationInput({
      schoolName: "",
      titleOfStudy: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  };

  const updateEducation = (index, updatedEducation) => {
    const updatedEntries = [...data.education];
    updatedEntries[index] = updatedEducation;
    handleChange("education", updatedEntries);
  };

  const deleteEducation = (index) => {
    const updatedEntries = data.education.filter((_, i) => i !== index);
    handleChange("education", updatedEntries);
  };

  return (
    <div className="infoBox">
      <label>School Name</label>
      <input type="text"
        placeholder='School Name'
        value={educationInput.schoolName}
        onChange={(e) => setEducationInput({ ...educationInput, schoolName: e.target.value })}
      />
      <label>Degree</label>
      <input type="text"
        placeholder='Degree'
        value={educationInput.titleOfStudy}
        onChange={(e) => setEducationInput({ ...educationInput, titleOfStudy: e.target.value })}
      />
      <Calendar label="Start Date"
        selectedDate={educationInput.startDate}
        onChange={(date) => setEducationInput({ ...educationInput, startDate: date })}
      />
      <Calendar label="End Date"
        selectedDate={educationInput.endDate}
        onChange={(date) => setEducationInput({ ...educationInput, endDate: date })}
      />
      <button onClick={addEducation}>Add Education</button>

      {data.education.map((entry, index) => (
        <EditEducation
          key={index}
          entry={entry}
          onUpdate={(updatedEntry) => updateEducation(index, updatedEntry)}
          onDelete={() => deleteEducation(index)}
        />
      ))}
    </div>
  )
}


function EditEducation({ entry, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);

  const handleUpdate = () => {
    onUpdate(editedEntry);
    setIsEditing(false);
  };

  return (
    <div className="editEducation">
      {isEditing ? (
        <>
          <input type="text"
            placeholder='School Name'
            value={editedEntry.schoolName}
            onChange={(e) => setEditedEntry({ ...editedEntry, schoolName: e.target.value })}
          />
          <input type="text"
            placeholder='Degree'
            value={editedEntry.titleOfStudy}
            onChange={(e) => setEditedEntry({ ...editedEntry, titleOfStudy: e.target.value })}
          />
          <Calendar
            label="Start Date"
            selectedDate={editedEntry.startDate}
            onChange={(date) => setEditedEntry({ ...editedEntry, startDate: date })}
          />
          <Calendar
            label="End Date"
            selectedDate={editedEntry.endDate}
            onChange={(date) => setEditedEntry({ ...editedEntry, endDate: date })}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>{entry.schoolName}</p>
          <p>{entry.titleOfStudy}</p>
          <p>
            {entry.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
            {entry.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )
      }
    </div>
  )
}

function Calendar({ label, selectedDate, onChange }) {
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



function Experience({ handleChange, data }) {
  const [experienceInput, setExperienceInput] = useState({
    companyName: "",
    positionTitle: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const addExperience = () => {
    handleChange("experience", [...data.experience, experienceInput]);
    setExperienceInput({
      companyName: "",
      positionTitle: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  };

  const updateExperience = (index, updatedExperience) => {
    const updatedEntries = [...data.experience];
    updatedEntries[index] = updatedExperience;
    handleChange("experience", updatedEntries);
  };

  const deleteExperience = (index) => {
    const updatedEntries = data.experience.filter((_, i) => i !== index);
    handleChange("experience", updatedEntries);
  };

  return (
    <div className="infoBox">
      <label>Company Name</label>
      <input
        type="text"
        placeholder='Company Name'
        value={experienceInput.companyName}
        onChange={(e) => setExperienceInput({ ...experienceInput, companyName: e.target.value })}
      />
      <label>Position Title</label>
      <input
        type="text"
        placeholder='Position Title'
        value={experienceInput.positionTitle}
        onChange={(e) => setExperienceInput({ ...experienceInput, positionTitle: e.target.value })}
      />
      <Calendar
        label="Start Date"
        selectedDate={experienceInput.startDate}
        onChange={(date) => setExperienceInput({ ...experienceInput, startDate: date })}
      />
      <Calendar
        label="End Date"
        selectedDate={experienceInput.endDate}
        onChange={(date) => setExperienceInput({ ...experienceInput, endDate: date })}
      />
      <button onClick={addExperience}>Add New Experience</button>
      {data.experience.map((entry, index) => (
        <EditExperience
          key={index}
          entry={entry}
          onUpdate={(updatedEntry) => updateExperience(index, updatedEntry)}
          onDelete={() => deleteExperience(index)}
        />
      ))}
    </div>
  )
}

function EditExperience({ entry, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);

  const handleUpdate = () => {
    onUpdate(editedEntry);
    setIsEditing(false);
  };

  return (
    <div className="editExperience">
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="Company Name"
            value={editedEntry.companyName}
            onChange={(e) => setEditedEntry({ ...editedEntry, companyName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Position Title"
            value={editedEntry.positionTitle}
            onChange={(e) => setEditedEntry({ ...editedEntry, positionTitle: e.target.value })}
          />
          <Calendar
            label="Start Date"
            selectedDate={editedEntry.startDate}
            onChange={(date) => setEditedEntry({ ...editedEntry, startDate: date })}
          />
          <Calendar
            label="End Date"
            selectedDate={editedEntry.endDate}
            onChange={(date) => setEditedEntry({ ...editedEntry, endDate: date })}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>{entry.companyName}</p>
          <p>{entry.positionTitle}</p>
          <p>
            {entry.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
            {entry.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}



function EditSkill({ skill, onUpdate, onDelete }) {
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
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
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

function Skills({ handleChange, data }) {

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

function Render({ data }) {
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phoneNum}</p>

      <div>
        <h2>Education</h2>
        {data.education.map((entry, index) => (
          <div key={index}>
            <p>{entry.schoolName}</p>
            <p>{entry.titleOfStudy}</p>
            <p>
              {entry.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
              {entry.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h2>Experience</h2>
        {data.experience.map((entry, index) => (
          < div key={index} >
            <p>{entry.companyName}</p>
            <p>{entry.positionTitle}</p>
            <p>
              {entry.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
              {entry.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </p>
          </div>
        ))}
      </div >

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
    education: [],
    experience: [],
    skills: [],
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  }

  return (
    <div className="layout">
      <div className="left">
        <h1>CV Application</h1>
        <h2>Information</h2>
        <GenInfo handleChange={handleChange} data={formData} />
        <h2>Education</h2>
        <Education handleChange={handleChange} data={formData} />
        <h2>Experience</h2>
        <Experience handleChange={handleChange} data={formData} />
        <h2>Skills</h2>
        <Skills handleChange={handleChange} data={formData} />
      </div>
      <div className="right">
        <Render data={formData} />
      </div>

    </div>
  )
}

export default App;
