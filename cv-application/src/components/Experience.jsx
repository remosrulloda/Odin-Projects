import Calendar from './Calendar.jsx';

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

export default Experience;