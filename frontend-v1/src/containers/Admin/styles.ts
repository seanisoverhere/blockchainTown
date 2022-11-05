import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 0rem 1.5rem;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const ConnectText = styled.div`
  font-weight: 600;
  font-family: monospace;
  font-size: 1rem;
`;

export const StyledImg = styled.img`
  height: 3rem;
`;

export const DirectorName = styled.div`
  padding: 1rem 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled.button`
  all: unset;
  text-align: center;
  border-radius: 10px;
  height: 40px;
  padding: 0 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background-color: #555;
  cursor: pointer;
  transition: background-color 0.4s;

  :hover {
    background-color: #333;
  }
`;
