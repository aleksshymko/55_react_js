import { useFormik } from "formik";
import * as yup from "yup";

import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import { Homework15Container, Title, ValidationForm } from "./styles";
import { ValidationFormValues } from "./types";

function Homework15() {
  const validationSchema = yup.object().shape({
    code: yup
      .number()
      .typeError("Код должен быть числом")
      .positive("Только позитивные значения")
      .integer("Только целые числа")
      .required("Это поле обязательно")
      .min(100000, "Код должен быть из 6 цифр")
      .max(999999, "Код должен быть из 6 цифр"),
    // .test(
    //   "6symbol",
    //   "Код должен быть из 6 цифр",
    //   (value) => String(value).length === 6
    // ),
    privacy: yup
      .boolean()
      .oneOf([true], "Необходимо согласие для продолжения"),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      privacy: false,
    } as ValidationFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit(values: ValidationFormValues, formikHelpers) {
      console.table(values);
      console.log("Вы успешно вошли");
      formikHelpers.resetForm();
    },
  });

  return (
    <Homework15Container>
    <ValidationForm onSubmit={formik.handleSubmit}>
      <Title>Validation Form</Title>
      <Input
        name="code"
        label="Validation Code"
        id="code_id"
        type="number"
        placeholder="Enter your code"
        value={formik.values.code}
        onChange={formik.handleChange}
        error={formik.errors.code}
      />
      <Checkbox
        name="privacy"
        label="Privacy and policy"
        id="privacy_id"
        checked={formik.values.privacy}
        onChange={formik.handleChange}
        error={formik.errors.privacy}
      />
      <Button name="Login" />
    </ValidationForm>
    </Homework15Container>
  );
}

export default Homework15;
