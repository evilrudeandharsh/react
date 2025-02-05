import PropTypes from 'prop-types';


const ResumeDisplay = ({ isSubmitted, personalInfo, education, experience }) => {
  if (!isSubmitted) return null; 

  return (
    <div className="resume">
      <div className="resume-content">
        <h2>Resume Preview</h2>
        <br /><br /><br />
        <h3>Personal Information</h3>
        <br /><br />
        <p><strong>Name:</strong> {personalInfo.name}</p>
        <br />
        <p><strong>Email:</strong> {personalInfo.email}</p>
        <br />
        <p><strong>Phone:</strong> {personalInfo.phone}</p>
        <br /><br />

        <h3>Education</h3>
        <br /><br />
        <p><strong>School:</strong> {education.school}</p>
        <br />
        <p><strong>Degree:</strong> {education.degree}</p>
        <br />
        <p><strong>Graduation Year:</strong> {education.gradYear}</p>
        <br />

        <h3>Experience</h3>
        <br /><br />
        <p><strong>Company:</strong> {experience.company}</p>
        <br />
        <p><strong>Position:</strong> {experience.position}</p>
        <br />
        <p><strong>Duration:</strong> {experience.duration}</p>
        <br />

        
      </div>
    </div>
  );
};
  
ResumeDisplay.propTypes = {
    isSubmitted: PropTypes.bool.isRequired,
    personalInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.number.isRequired,
    }).isRequired,
    education: PropTypes.shape({
        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        gradYear: PropTypes.string.isRequired,
    }).isRequired,
    experience: PropTypes.shape({
        company: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
};
  export default ResumeDisplay;