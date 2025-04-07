import { useFormik } from "formik";
import * as yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { CheckBoxWrapper, EmployeeFormWrapper, Message, Title } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(5, 'Имя должно содержать минимум 5 символов')
      .max(50, 'Имя не может превышать 50 символов'),
    age: yup
      .number()
      .required("Поле обязательно для заполнения")
      .integer("Поле должно содержать только целые цифры")
      .typeError("Поле должно содержать только цифры")
      .min(18, "Возраст должен быть не меньше 18 лет")
      .max(80, 'Возраст не может превышать 80 лет'),
    checkBox: yup
      .boolean()
      .oneOf([true], "Необходимо согласие для продолжения")
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      checkBox: false,
    },
    validationSchema: schema,
    onSubmit(values: EmployeeFormValues,{resetForm}) {
      console.log(values);
      resetForm()
    },
  });

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <Title>Employee Form</Title>
      <Input 
        name="fullName"
        label="Full Name"
        placeholder="Enter your full name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.errors.fullName}
      />
      <Input
        name="age"
        label="Age"
        placeholder="Enter your age"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <CheckBoxWrapper>
        <input
          id="box"
          name="checkBox"
          type="checkbox"
          checked={formik.values.checkBox}
          onChange={formik.handleChange}
        />
        <label htmlFor="box">Правила использования</label>
      </CheckBoxWrapper>
      <Message>{formik.errors.checkBox}</Message>
      <Button name="CREATE" />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
