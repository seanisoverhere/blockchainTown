import React from "react";
import { ImgWrapper, StyledCard, StyledImg, TitleText } from "./styles";
import moment from "moment";

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
      <TitleText>${parseInt(budget).toLocaleString()}</TitleText>
      <TitleText>{parseInt(voteYes)} Yes</TitleText>
      <TitleText>{parseInt(voteNo)} No</TitleText>
      <TitleText>
        {moment.unix(parseInt(votingEndTime)).format("MMMM Do")}
      </TitleText>
    </StyledCard>
  );
};

export default ItemCard;
