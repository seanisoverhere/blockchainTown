import styled from "styled-components";
import colors from "@/utils/constants/colors";

export const StyledNav = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LogoText = styled.div`
  font-weight: 600;
  font-size: 2rem;
  font-family: monospace;
`;

export const LinkButton = styled.button`
  all: unset;
  font-size: 1.25rem;
  cursor: pointer;
  text-align: center;
  min-width: 4rem;
  font-family: monospace;
`;

export const StyledAnchor = styled.div`
  color: ${colors.BLACK};
  display: inline;
  transition: color 0.4s;

  :hover {
    color: ${colors.ORANGE_8};
  }
`;
