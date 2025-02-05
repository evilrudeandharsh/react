import PropTypes from 'prop-types';
import '../App.css';
import { useEffect } from 'react';

const Experience = ({ data, setData, isSubmitted, isEdit }) => {
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
      <h2 className="section-title">Experience</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label className="label">
          Company:
          <br />
          <input
            type="text"
            name="company"
            value={data.company}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
        <label className="label">
          Position:
          <br />
          <input
            type="text"
            name="position"
            value={data.position}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
        <label className="label">
          Duration:
          <br />
          <input
            type="text"
            name="duration"
            value={data.duration}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
      </form>
    </section>
  );
};




Experience.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    isSubmitted: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        company: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        }).isRequired,
    setData: PropTypes.func.isRequired,
    };
  export default Experience;
  