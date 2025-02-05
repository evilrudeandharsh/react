import PropTypes from 'prop-types';
import '../App.css';
import { useEffect } from 'react';

const Education = ({ data, setData, isSubmitted, isEdit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isSubmitted) {
      
      null;
    }
  }, [isSubmitted, setData]);

  return (
    <section className="section1">
      <h2 className="section-title">Education</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label className="label">
          School:
          <br />
          <input
            type="text"
            name="school"
            value={data.school}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
        <label className="label">
          Degree:
          <br />
          <input
            type="text"
            name="degree"
            value={data.degree}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
        <label className="label">
          Graduation Year:
          <br />
          <input
            type="text"
            name="gradYear"
            value={data.gradYear}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
      </form>
    </section>
  );
};
Education.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
    data: PropTypes.shape({

        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        gradYear: PropTypes.string.isRequired

    }).isRequired,
    setData: PropTypes.func.isRequired
}
export default Education