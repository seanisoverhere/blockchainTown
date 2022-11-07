import styled from "styled-components";
import { Space } from "antd";
import CurrencyInput from "react-currency-input-field";

export const StyledSpace = styled(Space)`
  && {
    width: 100%;
  }
`;

export const StyledCurrencyInput = styled(CurrencyInput)`
  && {
    width: 100%;
    background: transparent;
    outline: 0;
    border-width: 0 0 1px;
    color: #4c4c4c;
    :focus {
      outline: none;
    }
  }
`;

export const HelperText = styled.div`
  color: #4c4c4c;
  font-size: 0.9rem;
  padding-bottom: 0.9rem;
  opacity: 0.7;
`;
