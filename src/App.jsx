import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Editor from './components/editor'

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

  return (
    <>
      <div>
        <div>{cvData.personalInfo.fullName}</div>
        <div>{cvData.personalInfo.email}</div>
        <div>{cvData.personalInfo.phoneNo}</div>
        <div>{cvData.personalInfo.location}</div>
        <div>{cvData.personalInfo.site}</div>
      </div>
      <Editor 
      data = {cvData} 
      handlePIChange={handlePersonalInfoChange}
      handleEduChange = {handleEduChange}
      />
    </>
  )
}

export default App
