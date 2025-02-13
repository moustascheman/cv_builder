import WorkEntry from "./WorkEntry";

function Work(props) {
    const { data, handleWorkChanges} = props;
    
    function AddWorkEntry() {
        handleWorkChanges([
            ...data,
            {
                key: crypto.randomUUID(),
                jobTitle: "",
                location: "",
                startDate: "",
                endDate: ""
            }
        ])
    }

    function RemoveEntry(entry) {
        handleWorkChanges(data.filter(job =>
            job.key !== entry.key
        ))
    }

    const handleEntryChange = (entry) => {
        const updatedArray = data.map(
            (job) => {
                if(job.key === entry.key){
                    return entry;
                }
                else{
                    return edu;
                }
            }
        )
        handleWorkChanges(updatedArray);
  }





    return (
        <div>
            <h2>Work Experience</h2>
            <ul>
                {data.map((Job) =>
                    <li key = {Job.key}>
                        <WorkEntry data={Job} handleChange = {handleEntryChange}/>
                        <button onClick={() =>{RemoveEntry(Job);}}>
                            Delete</button>
                    </li>
                )}
            </ul>
            <button onClick={() =>{AddWorkEntry();}}>
                Add Work Experience
            </button>
        </div>
     
    )
}

export default Work