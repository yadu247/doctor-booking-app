import './textarea.css';

const Textarea = ({ onChange, label, rows = 5, cols, value }) => {
  return (
    <div className="textarea-item">
      <label>{label}</label>
      <textarea value={value} onChange={onChange} rows={rows} cols={cols} />
    </div>
  );
};

export default Textarea;
