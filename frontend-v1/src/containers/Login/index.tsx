import React from "react";
import { Container, LoginCard, LoginTitle } from "./styles";
import { StyledButton } from "@/utils/styles";

const Login = () => {
  return (
    <Container>
      <LoginCard bordered={false}>
        <LoginTitle>Citizen Login</LoginTitle>
        <StyledButton>Sign In</StyledButton>
      </LoginCard>
    </Container>
  );
};

export default Login;
