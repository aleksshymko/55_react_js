import {
  CheckboxComponent,
  CheckboxContainer,
  CheckboxElement,
  CheckboxLabel,
  ErrorMessage,
} from "./styles";
import { CheckboxProps } from "./types";

function Checkbox({
  id,
  name,
  label,
  error,
  //type = "checkbox"
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <CheckboxComponent>
      <CheckboxContainer>
        <CheckboxElement
          id={id}
          name={name}
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
      </CheckboxContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </CheckboxComponent>
  );
}

export default Checkbox;
