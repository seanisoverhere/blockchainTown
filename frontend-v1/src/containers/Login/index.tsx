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
import { useRouter } from "next/router";
import {
  datastoreAddress,
  voterAddress,
} from "@/utils/constants/blockchainAddresses";
import { ethers } from "ethers";
import Datastore from "@/contracts/Datastore.json";

const Login = () => {
  const router = useRouter();

  const addVoter = async (email: string) => {
    if (typeof window.ethereum != "undefined") {
      window.ethereum.enable(); // main wallet
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        datastoreAddress,
        Datastore.abi,
        signer
      );
      // contract.<method in solidty>
      const transaction = await contract.addVoter(voterAddress, email);
      await transaction.wait();
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = async (data: Record<string, string>) => {
    localStorage.setItem("email", data.email);
    await addVoter(data.email);
    router.push("/");
  };

  return (
    <Container>
      <LoginCard bordered={false}>
        <LoginTitle>Citizen Login</LoginTitle>
        <CTAText>
          Enter your details to start voting for preferred upgrades!
        </CTAText>
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
