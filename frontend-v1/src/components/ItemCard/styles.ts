import styled from "styled-components";
import colors from "@/utils/constants/colors";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const TitleText = styled.div`
  font-size: 1rem;
  font-weight: 600;
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
