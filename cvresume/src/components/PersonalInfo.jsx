import PropTypes from 'prop-types';

import '../App.css';

import { useEffect } from 'react';

const PersonalInfo = ({ data, setData, isSubmitted,isEdit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isSubmitted) {
      // Clear the input fields when submitted
      null
    }
  }, [isSubmitted]);

  return (
    <section className="section1">
      <h2 className="section-title">Personal Information</h2>
      <form className="form">
        <label className="label">
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
        <label className="label">
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
        <label className="label">
          Phone:
          <br />
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            className="input"
            disabled={isSubmitted || !isEdit}
          />
        </label>
      </form>
    </section>
  );
};



  PersonalInfo.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    isSubmitted: PropTypes.bool.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    setData: PropTypes.func.isRequired,
  };
  export default PersonalInfo;