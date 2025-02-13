import PersonalInfo from "./PersonalInfo"
import Education from "./Education";
import Work from "./Work";
import '../styles/Editor.css'

function Editor(props) {

      const {data, handlePIChange, handleEduChange, handleWorkChanges} = props;

      return (
        <div className="EditorPane">
            <PersonalInfo data = {data.personalInfo} handleChange = {handlePIChange}/>
            <Education data = {data.educationExperience} handleEduChange = {handleEduChange}/>
            <Work data = {data.workExperience} handleWorkChanges = {handleWorkChanges}/>
        </div>
    )
}

export default Editor