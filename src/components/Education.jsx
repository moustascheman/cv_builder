import EducationEntry from "./EducationEntry";

function Education(props) {
    const { data, handleEduChange } = props;

    function AddEducationEntry() {
        console.log("Added");

          handleEduChange([
              ...data,
              {
                  key: crypto.randomUUID(),
                  schoolName: "",
                  major: "",
                  startDate: "",
                  endDate: ""
              }
          ]
      );

    }

    const handleEntryChange = (entry) => {
          const updatedArray = data.map(
              (edu) => {
                  if(edu.key === entry.key){
                      return entry;
                  }
                  else{
                      return edu;
                  }
              }
          )
          handleEduChange(updatedArray);
    }


    return (

        <>
            <div>
                <h2>Education</h2>
                <ul>
                    {data.map((Edu) => (
                        <li key={Edu.key}>
                            <EducationEntry data={Edu} handleChange = {handleEntryChange} />
                            <button className="deleteButton" onClick={
                                () => {
                                    console.log("deleted");
                                     handleEduChange(data.filter(entry =>
                                        entry.key !== Edu.key
                                     ));
                                }}>
                                Delete Education
                            </button>
                        </li>
                    ))}

                </ul>
                <button className="addButton" onClick={() => {
                    AddEducationEntry();
                }}>
                    Add Education
                </button>
            </div>
        </>


    )
}

export default Education