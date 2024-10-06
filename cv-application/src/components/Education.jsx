import Calendar from 'Calendar.jsx';

function Education() {
    return (
        <div className="infoBox">
            <input type="text" id='schoolNameInput' placeholder='School Name' />
            <input type="text" id='titleOfStudyInput' placeholder='Title of Study' />
            <Calendar />
        </div>
    )
}

export default Education;