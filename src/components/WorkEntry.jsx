function WorkEntry(props) {
    const {data, handleChange} = props;

    const changeData = (e) => {
        const {name, value} = e.target;
        handleChange({
            ...data,
            [name]: value,
        })
    }

    return (
        <>
            <form>
                <label htmlFor="employer">Employer:</label>
                <input id="employer" name="employer" type="text" onChange={changeData}></input>

                <label htmlFor="jobtitle">Job Title:</label>
                <input id="jobtitle" name="jobTitle" type="text" onChange={changeData}></input>

                <label htmlFor="location">Location:</label>
                <input id="location" name="location" type="text" onChange={changeData}></input>

                <label htmlFor="startdate">Start Date:</label>
                <input id="startdate" name="startDate" type="date" onChange={changeData}></input>

                <label htmlFor="enddate">End Date:</label>
                <input id="enddate" name="endDate" type="date" onChange={changeData}></input>
            </form>
        </>
    )
}

export default WorkEntry