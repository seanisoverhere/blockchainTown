import React from "react";
import {
  TextField,
  InputText,
  StyledInput,
  AlignError,
  ErrorSign,
  ErrorText,
} from "./styles";
import { UseFormRegister, FieldValues, FieldErrorsImpl } from "react-hook-form";

type FormItemProps = {
  inputText: string;
  isRequired?: boolean;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
};

const FormItem = ({
  inputText,
  isRequired,
  name,
  register,
  errors,
}: FormItemProps) => (
  <>
    <TextField>
      <InputText>{inputText}</InputText>
      {!isRequired && <InputText>Optional</InputText>}
    </TextField>
    <StyledInput
      {...register(name, { required: isRequired })}
      type={name === "password" ? "password" : "text"}
      $hasError={!!errors[name]}
    />
    {errors[name] && (
      <AlignError>
        <ErrorSign src="/error.svg" alt="error" />
        <ErrorText>This field is required.</ErrorText>
      </AlignError>
    )}
  </>
);

export default FormItem;
