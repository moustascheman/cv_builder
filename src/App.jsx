import { useState } from 'react'
import './App.css'
import Editor from './components/editor'
import Preview from './components/Preview'

function App() {
  const [count, setCount] = useState(0)
  const [cvData, setCVData] = useState({
    personalInfo: {
      fullName: "John Doe",
      email: "jdoe@notexist.com",
      phoneNo: 1111111111,
      location: "Toronto, Ontario",
      site: "www.google.ca"
    },
    educationExperience: [
      {
        key: crypto.randomUUID(),
        schoolName: "",
        major:"",
        startDate:"",
        endDate:""
      }
    ],
    workExperience: []
  })

  const handlePersonalInfoChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
   setCVData(
    {
      ...cvData,
      personalInfo: {
        ...cvData.personalInfo,
        [name]: value,
      }
    }
   )
  }

  const handleEduChange = (educationArr) => {
    setCVData({
      ...cvData,
      educationExperience: [...educationArr]
    })
  }

  const handleWorkChanges = (workArr) => {
    setCVData({
      ...cvData,
      workExperience: [...workArr]
    })
  }

  return (
    <>
      <h1>CSV Builder</h1>
      <body>
      <Editor 
      data = {cvData} 
      handlePIChange={handlePersonalInfoChange}
      handleEduChange = {handleEduChange}
      handleWorkChanges = {handleWorkChanges}
      />
      <Preview data={cvData}/>
      </body>
    </>
  )
}

export default App
