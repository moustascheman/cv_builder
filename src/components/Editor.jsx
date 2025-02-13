import PersonalInfo from "./PersonalInfo"
import Education from "./Education";

function Editor(props) {

      const {data, handlePIChange, handleEduChange} = props;

      return (
        <div>
            <PersonalInfo data = {data.personalInfo} handleChange = {handlePIChange}/>
            <Education data = {data.educationExperience} handleEduChange = {handleEduChange}/>
        </div>
    )
}

export default Editor