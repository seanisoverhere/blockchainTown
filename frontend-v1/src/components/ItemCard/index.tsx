import React from "react";
import {
  BudgetText,
  DescriptionContainer,
  FlexContainer,
  StyledCard,
  TitleText,
  VotingContainer,
} from "./styles";
import moment from "moment";
import {
  DollarCircleOutlined,
  CalendarOutlined,
  ExceptionOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
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
};

const ItemCard = ({
  title,
  budget,
  voteYes,
  voteNo,
  votingEndTime,
}: ItemCardProps) => {
  const router = useRouter();

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

  const handleVote = async (voteAnswers: any) => {
    // await addVoter();
    voteProposal(title, voteAnswers);
  };

  const handleEndProposal = async () => {
    if (typeof window.ethereum != "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        proposalAddress,
        ProposalContract.abi,
        signer
      );
      const transaction = await contract.removeEndedProposals2();
      await transaction.wait();
    }
  };

  return (
    <StyledCard bordered={false}>
      <FlexContainer>
        <TitleText>{title}</TitleText>
      </FlexContainer>
      <FlexContainer>
        <BudgetText>
          <DollarCircleOutlined /> ${parseInt(budget).toLocaleString()}
        </BudgetText>
        <BudgetText>
          <CalendarOutlined />{" "}
          {moment.unix(parseInt(votingEndTime)).format("MMMM Do, yy")}
        </BudgetText>
      </FlexContainer>
      <DescriptionContainer>
        Some description about the project...
      </DescriptionContainer>
      <VotingContainer>
        <Poll
          id={`${title}_${votingEndTime}`}
          question={pollQuestion}
          answers={pollAnswers}
          onVote={handleVote}
          vote
        />
      </VotingContainer>
    </StyledCard>
  );
};

export default ItemCard;
