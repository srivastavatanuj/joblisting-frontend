import { useRef, useState } from "react";
import "./select.css";
import useOutsideClick from "../../lib/useOutsideClick";

const Select = ({ name, options, value, onChange }) => {
  const [openOption, setOpenOption] = useState(false);

  const optionRef = useRef(null);
  const selectRef = useRef(null);

  const optionPostfix = {
    Role: "developer",
    "Min experience": "years",
    "Min base pay": "LPA",
  };

  useOutsideClick((e) => {
    if (selectRef.current.contains(e) && !optionRef.current.contains(e)) {
      setOpenOption((prevState) => !prevState);
    } else if (!optionRef.current.contains(e)) {
      setOpenOption(false);
    }
  });

  var selectedOption = value || [];

  const handleOptionSelect = (status, name) => {
    if (status) {
      selectedOption.push(name);
    } else {
      const index = selectedOption.indexOf(name);
      selectedOption.pop(index);
    }

    onChange(selectedOption);
  };

  return (
    <div className="selectContainer" ref={selectRef}>
      <div className="select">
        <input
          type="text"
          placeholder={name}
          value={value ? value.join(", ") : ""}
        />
        <span> &#709;</span>
      </div>

      <div
        className="selectOptions"
        style={{ display: openOption && "grid" }}
        ref={optionRef}
      >
        {options.map((option, index) => {
          return (
            <div>
              <input
                type="checkbox"
                id={`option_${name + index}`}
                onChange={(e) => handleOptionSelect(e.target.checked, option)}
              />
              <label htmlFor={`option_${name + index}`}>
                {option} {optionPostfix[name]}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
