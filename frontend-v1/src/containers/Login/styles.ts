import styled from "styled-components";
import colors from "@/utils/constants/colors";
import { Card, Space } from "antd";

export const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background: url("/frame.svg") 50% 50% no-repeat;
  background-size: cover;
  background-color: ${colors.ORANGE_1};
`;

export const LoginCard = styled(Card)`
  && {
    position: absolute;
    min-width: 500px;
    min-height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 16px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
`;

export const LoginTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const StyledSpace = styled(Space)`
  && {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const CTAText = styled.div`
  font-weight: 400;
`;

export const SignUpText = styled.div`
  font-size: 0.875rem;
  padding-top: 1.5rem;
`;
