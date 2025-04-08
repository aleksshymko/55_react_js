import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import { Homework15Container, Title, ValidationFormContainer } from "./styles";
import { Homework15Values } from "./types";

function Homework15() {
  const schema = yup.object().shape({
    validation_code: yup
      .number()
      .typeError("Код должен быть числом")
      .positive("Только позитивные значения")
      .integer("Только целые числа")
      .required("Это поле обязательно")
      .min(100000, "Код должен быть из 6 цифр")
      .max(999999, "Код должен быть из 6 цифр"),
    // .test(
    //   "length",
    //   "Код должен быть из 6 цифр",
    //   (value) => String(value).length === 6
    // ),
    privacy_and_policy: yup
      .boolean()
      .oneOf([true], "Необходимо согласие для продолжения"),
  });

  const formik = useFormik({
    initialValues: {
      validation_code: "",
      privacy_and_policy: false,
    } as Homework15Values,
    validationSchema: schema,
    onSubmit(values, { resetForm }) {
      console.table(values);
      console.log("Вы успешно вошли");
      resetForm();
    },
  });

  return (
    <Homework15Container>
    <ValidationFormContainer onSubmit={formik.handleSubmit}>
      <Title>Validation Form</Title>
      <Input
        name="validation_code"
        label="Validation code"
        placeholder="Enter your code"
        value={formik.values.validation_code}
        onChange={formik.handleChange}
        error={formik.errors.validation_code}
      />
      <Checkbox
        name="privacy_and_policy"
        label="Privacy and policy"
        checked={formik.values.privacy_and_policy}
        onChange={formik.handleChange}
        error={formik.errors.privacy_and_policy}
      />
      <Button name="Login" />
    </ValidationFormContainer>
    </Homework15Container>
  );
}

export default Homework15;
