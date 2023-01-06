import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

function Registation() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password should be of minimum 8 character")
      .matches(/[a-zA-Z0-9]/, "Password can't contain any special character"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.number().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.number()
        .min(999999999, "invalid phone number")
        .max(9999999999, "invalid phone number")
        .required("Required"),
    }),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Registation Form:", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="input"
              type="password"
              name="password"
              label="Password"
            />
            <FormikControl
              control="input"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
            />
            <FormikControl
              control="radio"
              name="modeOfContact"
              label="Mode Of Contact"
              options={options}
            />
            <FormikControl
              control="input"
              type="number"
              name="phone"
              label="Phone Number"
            />
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Registation;
