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
