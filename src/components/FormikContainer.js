import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option 1" },
    { key: "Option 2", value: "option 2" },
    { key: "Option 3", value: "option 3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "option 1" },
    { key: "Option 2", value: "option 2" },
    { key: "Option 3", value: "option 3" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "option checkbox 1" },
    { key: "Option 2", value: "option checkbox2" },
    { key: "Option 3", value: "option checkbox 3" },
    { key: "Option 4", value: "option checkbox 4" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form Values:", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            name="email"
            label="E-mail"
          />
          <FormikControl
            control="textarea"
            name="description"
            label="Description"
          />
          <FormikControl
            control="select"
            name="selectOption"
            label="Select a topic"
            options={dropdownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox Topic"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="Pick a date" name="birthDate" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
