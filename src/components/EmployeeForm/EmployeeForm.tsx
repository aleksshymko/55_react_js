import { useFormik } from "formik";
import * as yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  Checkbox,
  CheckBoxContainer,
  CheckboxLabel,
  EmployeeFormComponent,
  ErrorMessage,
  Title,
} from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = yup.object().shape({
    full_name: yup
      .string()
      .required("Поле Full Name является обязательным")
      .min(5, "Минимум 5 символов")
      .max(50, "Максимум  50 символов"),
    age: yup
      .number()
      .typeError("Поле должно содержать только цифры")
      .required("Поле Age обязательно для заполнения")
      .integer("Поле должно содержать только целые цифры")
      .min(18, "Возраст должен быть не меньше 18 лет")
      .max(80, "Возраст не может превышать 80 лет"),
    agreement: yup
      .boolean()
      .oneOf([true], "Необходимо согласие для продолжения"),
    password: yup
      .string()
      .required("Поле Password является обязательным")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)"
      ),
    code: yup
      .number()
      .typeError("Тип значения - число")
      .test("min length", "Мin 3 символа", (value) => String(value).length >= 3)
      .test(
        "max length",
        "Мax 8 символов",
        (value) => String(value).length <= 8
      ),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      age: "",
      agreement: false,
      password: "",
      code: "",
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit(values: EmployeeFormValues, { resetForm }) {
      console.table(values);
      resetForm();
    },
  });

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Title>Employee Form</Title>
      <Input
        name="full_name"
        label="Full Name"
        id="full_name_id"
        placeholder="Enter your full name"
        value={formik.values.full_name}
        onChange={formik.handleChange}
        error={formik.errors.full_name}
      />
      <Input
        name="age"
        label="Age"
        id="age_id"
        placeholder="Enter your age"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <Input
        name="password"
        label="Password*"
        id="password_id"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Input
        name="code"
        label="Code"
        id="code_id"
        placeholder="Enter your employee code"
        value={formik.values.code}
        onChange={formik.handleChange}
        error={formik.errors.code}
      />
      <CheckBoxContainer>
        <Checkbox
          id="agree_id"
          name="agreement"
          type="checkbox"
          checked={formik.values.agreement}
          onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor="agree_id">Правила использования</CheckboxLabel>
      </CheckBoxContainer>
      <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
      <Button name="CREATE" />
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
