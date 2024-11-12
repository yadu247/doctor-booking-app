import './button.css';

const Button = ({ text = 'Click', onClick, color = '#18bcfc' }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
