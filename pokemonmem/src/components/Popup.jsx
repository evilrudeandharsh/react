
// Date: 03/08/2021
// eslint-disable-next-line react/prop-types
function Popup({ pokemonName, onClose }) {
  return (
    <div className="popup">
      <div className="innerpop">
      <h1>You lost!</h1>
      <h2>You pressed {pokemonName} twice!</h2>
      <div className="lostbutton" onClick={onClose}>Try again</div></div>
    </div>
  );
}

export default Popup;

