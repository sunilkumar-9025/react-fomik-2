import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

function CourseEnrollment() {
  const checkboxOption = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "javascript" },
  ];

  const dropdownOption = [
    { key: "Select your Course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Enrollment:", values);
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
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl control="textarea" label="Bio" name="bio" />
          <FormikControl
            control="select"
            name="course"
            label="Course"
            options={dropdownOption}
          />
          <FormikControl
            control="checkbox"
            name="skillset"
            label="Skillset"
            options={checkboxOption}
          />
          <FormikControl control="date" name="courseDate" label="Course Date" />
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CourseEnrollment;
