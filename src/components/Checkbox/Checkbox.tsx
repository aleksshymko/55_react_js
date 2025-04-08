import {
  CheckboxContainer,
  ErrorMessage,
  InputComponent,
  InputWrapper,
  Label,
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
    <CheckboxContainer>
      <InputWrapper>
        <InputComponent
          id={id}
          name={name}
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <Label htmlFor={id}>{label}</Label>
      </InputWrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </CheckboxContainer>
  );
}

export default Checkbox;
