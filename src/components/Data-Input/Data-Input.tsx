// Ваш DataInput компонент
import React, { useRef, useState } from "react";
import "./Data-Input.css";

function DataInput({
  id = "dataInput",
  inputName = "input",
  hint = "some text",
  isPassword = false,
  onChange=(v:string)=>{},
}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const togglePasswordVisibility = () => {
    if (inputRef.current) {
      const inputType = inputRef.current.type;
      inputRef.current.type = inputType === "password" ? "text" : "password";
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (onChange) {
      onChange(value); // Вызываем обработчик изменения
    }
  };

  return (
    <>
      <div className="dataInput" id={"parent-" + id}>
        <div className="inputName">{inputName}</div>
        <div className="field">
          <input
            ref={inputRef}
            id={id}
            className="inputField"
            placeholder={hint}
            type={isPassword ? "password" : "text"}
            value={inputValue}
            onChange={handleChange}
          />
          <span
            className="hide"
            style={{ display: isPassword ? "block" : "none" }}
            onClick={togglePasswordVisibility}
          ></span>
        </div>
      </div>
    </>
  );
}

export default DataInput;
