import styled from "styled-components";
import { Card } from "antd";
import colors from "@/utils/constants/colors";

export const StyledCard = styled(Card)`
  && {
    border-radius: 25px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
`;

export const TitleText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  flex: 1;
`;

export const ImgWrapper = styled.div`
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 200px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; ;
`;

export const BudgetText = styled.div`
  font-size: 1rem;
`;

export const VoterText = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const RightAlign = styled.div`
  text-align: right;
`;

export const Voter = styled.span`
  color: ${colors.GREY};
  font-size: 0.8rem;
  font-weight: 500;
`;

export const VotingContainer = styled.div`
  margin-top: 1rem;
`;

export const DescriptionContainer = styled.div`
  margin-top: 1rem;
`;

export const EndProposalText = styled.div`
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    color: ${colors.ORANGE_8};
  }
`;
