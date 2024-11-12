import { useState, useEffect } from 'react';

import './multi-select.css';

const MultiSelect = ({
  label,
  options = [],
  onChange = () => {},
  selectedTextData = [],
  selectedValueData = [],
}) => {
  const [selectedText, setSelectedText] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  useEffect(() => {
    setSelectedText(selectedTextData);
    setSelectedValue(selectedValueData);
  }, [selectedTextData, selectedValueData]);

  const deleteSelectedItem = item => {
    let index;
    const selectedTextCopy = [...selectedText];
    const selectedValueCopy = [...selectedValue];

    for (let i = 0; i < selectedTextCopy.length; i++) {
      if (selectedTextCopy[i] == item) {
        index = i;
      }
    }

    selectedTextCopy.splice(index, 1);
    selectedValueCopy.splice(index, 1);
    setSelectedText(selectedTextCopy);
    setSelectedValue(selectedValueCopy);

    onChange(selectedValueCopy);
  };

  return (
    <div className="select-item">
      <label>{label}</label>

      <select
        onChange={e => {
          const split = e.target.value.split(' ');
          const value = split[0];
          const text = split[1];
          if (!selectedText.includes(text) && value) {
            setSelectedText([...selectedText, text]);
            setSelectedValue([...selectedValue, value]);
            onChange([...selectedValue, value]);
          }
        }}
      >
        <option value="">Please Choose</option>
        {options.map(item => {
          return (
            <option value={`${item.value} ${item.text}`}>{item.text}</option>
          );
        })}
      </select>

      <div className="selected-item">
        {selectedText.map(item => {
          return (
            <div className="selected-item-container">
              <span>{item}</span>
              <button
                onClick={() => {
                  deleteSelectedItem(item);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelect;
