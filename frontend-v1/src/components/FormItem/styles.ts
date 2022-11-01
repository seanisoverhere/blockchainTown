import styled from "styled-components";

export const TextField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InputText = styled.div`
  color: #4c4c4c;
  opacity: 0.7;
  line-height: 30px;
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  outline: 0;
  border-width: 0 0 1px;
  border-color: ${({ $hasError }) => ($hasError ? "#ff0000" : "#4c4c4c")};
  line-height: 25px;
  color: #4c4c4c;
  width: 100%;
  background: transparent;

  :focus {
    border-color: #4c4c4c;
  }
`;

export const AlignError = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.4rem;
`;

export const ErrorSign = styled.img`
  width: 15px;
  height: 15px;
`;

export const ErrorText = styled.span`
  color: #4c4c4c;
  opacity: 0.7;
  margin-left: 0.5rem;
`;
