import React from "react";
import {
  BudgetText,
  DescriptionContainer,
  EndProposalText,
  FlexContainer,
  StyledCard,
  TitleText,
  VotingContainer,
} from "./styles";
import moment from "moment";
import { DollarCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import { ethers } from "ethers";
import ProposalContract from "@/contracts/ProposalContract.json";
// @ts-ignore
import Poll from "react-polls";
import { proposalAddress } from "@/utils/constants/blockchainAddresses";

type ItemCardProps = {
  title: string;
  budget: string;
  voteYes: string;
  voteNo: string;
  votingEndTime: string;
  seeProposal: () => void;
  isWinning?: boolean;
  sendMoney?: () => void;
};

const ItemCard = ({
  title,
  budget,
  voteYes,
  voteNo,
  votingEndTime,
  seeProposal,
  isWinning,
  sendMoney,
}: ItemCardProps) => {
  const pollQuestion = `Vote for ${title}`;
  const pollAnswers = [
    { option: "Yes", votes: parseInt(voteYes) },
    { option: "No", votes: parseInt(voteNo) },
  ];

  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const voteProposal = async (title: string, answer: string) => {
    if (typeof window.ethereum != "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        proposalAddress,
        ProposalContract.abi,
        signer
      );
      const transaction = await contract.voteProposal(title, answer === "Yes");
      await transaction.wait();
    }
  };

  console.log(parseInt(votingEndTime));

  const handleVote = async (voteAnswers: any) => {
    voteProposal(title, voteAnswers);
    seeProposal();
  };

  return (
    <StyledCard bordered={false}>
      <FlexContainer>
        <TitleText>{title}</TitleText>
        {isWinning && (
          <EndProposalText onClick={sendMoney}>
            <DollarCircleOutlined /> Send Money
          </EndProposalText>
        )}
      </FlexContainer>
      <FlexContainer>
        <BudgetText>
          <DollarCircleOutlined /> ${parseInt(budget).toLocaleString()}
        </BudgetText>
        <BudgetText>
          <CalendarOutlined />{" "}
          {moment(parseInt(votingEndTime)).format("MMMM Do, yy")}
        </BudgetText>
      </FlexContainer>
      <DescriptionContainer>
        Some description about the project...
      </DescriptionContainer>
      {!isWinning && (
        <VotingContainer>
          <Poll
            key={`${title}_${votingEndTime}`}
            question={pollQuestion}
            answers={pollAnswers}
            onVote={handleVote}
          />
        </VotingContainer>
      )}
    </StyledCard>
  );
};

export default ItemCard;
