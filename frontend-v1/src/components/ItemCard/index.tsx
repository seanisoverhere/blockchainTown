import React from "react";
import { ImgWrapper, StyledCard, StyledImg, TitleText } from "./styles";
import { Progress } from "antd";

type ItemCardProps = {
  title: string;
  budget: string;
  voteYes: string;
  voteNo: string;
  votingEndTime: string;
};

const ItemCard = ({
  title,
  budget,
  voteYes,
  voteNo,
  votingEndTime,
}: ItemCardProps) => {
  return (
    <StyledCard
      bordered={false}
      cover={
        <ImgWrapper>
          <StyledImg src="/temp.jpg" alt="Item image" height="300px" />
        </ImgWrapper>
      }
    >
      <TitleText>{title}</TitleText>
      <Progress percent={20} />
    </StyledCard>
  );
};

export default ItemCard;
