function EducationEntry(props) {
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
                <label htmlFor="schoolname">School Name:</label>
                <input id='schoolname' name="schoolName" type="text" value= {data.schoolName} onChange={changeData}></input>

                <label htmlFor="major">Major:</label>
                <input id='major' name="major" type="text" onChange={changeData} value={data.major}></input>

                <label htmlFor="startdate">Date Started:</label>
                <input id='startdate' name="startDate" type="date" onChange={changeData} value={data.startDate}></input>

                <label htmlFor="enddate">Date Ended:</label>
                <input id='enddate' name="endDate" type="date" onChange={changeData} value = {data.endDate}></input>
            </form>
        
        </>
    )


}

export default EducationEntry