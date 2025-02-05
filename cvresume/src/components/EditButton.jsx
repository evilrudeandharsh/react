import PropTypes from "prop-types";

import '../App.css';


const EditButton = ({ onClick, label }) => (
    <button className="edit" onClick={onClick}>
      {label}
    </button>
  );
  
    EditButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    };

    
  export default EditButton;

  