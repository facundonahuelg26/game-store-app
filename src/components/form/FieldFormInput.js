import { ErrorMessage } from "formik";
import React from "react";
import { ContainerField, Errors } from "../../styled-components";
import { InputField as Field } from "../../styled-components";
export const FieldFormInput = ({ condition, item }) => {
  return (
    <ContainerField key={item.id}>
      <Field
        name={item.name}
        type={item.type}
        placeholder={item.placeholder}
        disabled={condition}
      />
      <ErrorMessage name={item.name} component={Errors} />
    </ContainerField>
  );
};
