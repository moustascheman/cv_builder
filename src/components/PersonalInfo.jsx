

function PersonalInfo(props) {
    const {data, handleChange} = props;

    return (
        <>
            <form id= {data.key}>
                <h2>Personal Information</h2>
                <label htmlFor="fullname">Full Name:</label>
                <input id='fullname' name="fullName" type="text" defaultValue={data.fullName} onChange={handleChange}></input>
                <label htmlFor="email">Email:</label>
                <input id='email' name="email" type="email" defaultValue = {data.email} onChange={handleChange}></input>
                <label htmlFor="phoneno">Phone Number:</label>
                <input id='phoneno' name="phoneNo" type="text" onChange={handleChange} defaultValue={data.phoneNo}></input>
                <label htmlFor="location">Location:</label>
                <input id='location' name="location" type="text" onChange={handleChange} defaultValue={data.location}></input>
                <label htmlFor="site">Website:</label>
                <input id="site" name = "site" type="url" onChange={handleChange} defaultValue={data.site}></input>
            </form>
        </>
    )

}

export default PersonalInfo