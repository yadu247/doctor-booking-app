import './input.css';

const Input = ({ type = 'text', onChange, label, value }) => {
  return (
    <div className="input-item">
      <label>{label}</label>
      <input value={value} type={type} onChange={onChange} />
    </div>
  );
};

export default Input;
