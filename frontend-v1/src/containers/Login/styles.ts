import styled from "styled-components";
import colors from "@/utils/constants/colors";
import { Card } from "antd";

export const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: ${colors.ORANGE_1};
`;

export const LoginCard = styled(Card)`
  && {
    position: absolute;
    min-width: 600px;
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
