import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import ResumeDisplay from './components/ResumeDisplay'
import EditButton from './components/EditButton'



function App() {
  const [personalinfo,setPersonalInfo] = useState({

    name: '',
    email: '',
    phone: ''

  });
  const [education, setEducation] = useState({

    school: '',
    degree: '',
    gradYear: ''

  });
  const [experience, setExperience] = useState({

    company: '',
    position: '',
    duration: ''

  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = () =>{ setIsSubmitted(true) ,setIsEdit(false)};
  const handleEdit = () => {setIsEdit(true),setIsSubmitted(false)};
  



  return (
    <>


    <h1 className="header">CV Resume</h1>
    <div className="App">
      
      
      
      <div className='section'>
      <PersonalInfo data={personalinfo} setData={setPersonalInfo} isSubmitted={isSubmitted} isEdit={isEdit}  />
      <Education data={education} setData={setEducation} isSubmitted={isSubmitted} isEdit={isEdit} />
      <Experience data={experience} setData={setExperience} isSubmitted={isSubmitted} isEdit={isEdit} />
      <EditButton onClick={handleSubmit} label="Submit" />
      
      </div>
      
      
      <ResumeDisplay

        isSubmitted={isSubmitted}
        personalInfo={personalinfo}
          education={education}
          experience={experience}
          
          
          
       
        />
        <EditButton onClick={handleEdit} label="Edit" />
        
      </div>
      
    

    </>
  );
}


export default App 
