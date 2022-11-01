import React from "react";
import { ImgWrapper, StyledCard, StyledImg, TitleText } from "./styles";

type ItemCardProps = {
  title: string;
  image: string;
  description: string;
  cost: string;
  link: string;
};

const ItemCard = ({ title, image, description, cost, link }: ItemCardProps) => {
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
    </StyledCard>
  );
};

export default ItemCard;
