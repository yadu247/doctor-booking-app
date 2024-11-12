import './select.css';

const Select = ({ value, label, options = [], onChange }) => {
  return (
    <div className="select-item">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="">Please Choose</option>

        {options.map(item => {
          return <option value={item.value}>{item.text}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
