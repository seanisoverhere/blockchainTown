import styled from "styled-components";
import colors from "./constants/colors";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.ORANGE_1};
  padding: 0 10rem;

`;

export const StyledButton = styled.button`
  all: unset;
  text-align: center;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.BLACK};
  background-color: ${colors.ORANGE_6};
  cursor: pointer;
`;
