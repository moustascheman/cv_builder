
function Preview(props){
    const {data} = props;

    return (
        <>
            <div id="previewPane">
                <h3>{data.personalInfo.fullName}</h3>
                <div>
                    <span>{data.personalInfo.email}</span>
                    <span>{data.personalInfo.phoneNo}</span>
                    <span>{data.personalInfo.location}</span>
                    <span>{data.personalInfo.site}</span>
                </div>

                <div>
                    {data.educationExperience.map(entry =>
                        <div>
                            <h4>{entry.schoolName}</h4>
                            <span>{entry.major}</span>
                            <span>{entry.startDate} {(entry.startDate || entry.endDate) ? "-" : ""} {entry.endDate}</span>
                        </div>
                    )}
                </div>
                <div>
                    {data.workExperience.map(job =>
                        <div>
                            <h4>{job.jobTitle}</h4>
                            <span>{job.employer}</span>
                            <span>{job.location}</span>
                            <span>{job.startDate} {(job.startDate || job.endDate) ? "-" : ""} {job.endDate}</span>
                        </div>
                    )}
                </div>
            </div>
        
        </>

    )
}

export default Preview