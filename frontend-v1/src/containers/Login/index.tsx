import React from "react";
import {
  Container,
  StyledSpace,
  LoginCard,
  LoginTitle,
  SignUpText,
  CTAText,
} from "./styles";
import { StyledButton } from "@/utils/styles";
import { useForm } from "react-hook-form";
import FormItem from "@/components/FormItem";

const Login = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <LoginCard bordered={false}>
        <LoginTitle>Citizen Login</LoginTitle>
        <CTAText>Enter your details to start voting for preferred upgrades!</CTAText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledSpace direction="vertical" size="large">
            <FormItem
              inputText="Email / Phone Number"
              name="email"
              register={register}
              errors={errors}
              isRequired
            />
            <FormItem
              inputText="Password"
              name="password"
              register={register}
              errors={errors}
              isRequired
            />
          </StyledSpace>
          <StyledButton>Sign In</StyledButton>
        </form>
        <SignUpText>
          Don't have an account? <strong>Register now</strong>
        </SignUpText>
      </LoginCard>
    </Container>
  );
};

export default Login;
