function WorkEntry(props) {
    const {data, handleChange} = props;

    return (
        <>
            <form>
                <label htmlFor="employer">Employer:</label>
                <input id="employer" name="employer" type="text"></input>

                <label htmlFor="jobtitle">Job Title:</label>
                <input id="jobtitle" name="jobTitle" type="text"></input>

                <label htmlFor="location">Location:</label>
                <input id="location" name="location" type="text"></input>

                <label htmlFor="startdate">Start Date:</label>
                <input id="startdate" name="startDate" type="date"></input>

                <label htmlFor="enddate">End Date:</label>
                <input id="enddate" name="endDate" type="date"></input>
            </form>

        </>
    )
}