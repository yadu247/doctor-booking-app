import './button.css';

const Button = ({ text = 'Click', onClick, color = '#18bcfc' }) => {
  return (
    <button
      className="btn-component"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
