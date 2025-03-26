import "./styles.css";
import { InputProps } from "./types";

function Input({
  placeholder,
  name,
  value,
  type = "text",
  onChange,
  label,
  id,
}: InputProps) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        className="input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        id={id}
      />
    </div>
  );
}

export default Input;
