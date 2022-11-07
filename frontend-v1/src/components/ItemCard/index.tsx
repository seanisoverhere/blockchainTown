import React from "react";
import {
  BudgetText,
  EndProposalText,
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
import Datastore from "@/contracts/Datastore.json";
// @ts-ignore
import Poll from "react-polls";

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

  const datastoreAddress = "0x45e81400E70e7b78834120230fD44972c8A41334";
  const proposalAddress = "0xe8b00d59B0E371d3d1b71D1306FACbA45862784b";
  const metamaskAddress = "0xcb65A614A8c30410e6E6c72DCD6B845AeAB35df0";

  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const addVoter = async () => {
    if (typeof window.ethereum != "undefined") {
      window.ethereum.enable(); // main wallet
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        datastoreAddress,
        Datastore.abi,
        signer
      );
      // contract.<method in solidty>
      const transaction = await contract.addVoter(
        metamaskAddress,
        "Keith voter"
      );
      await transaction.wait();
    }
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

  return (
    <StyledCard bordered={false}>
      <FlexContainer>
        <TitleText>{title}</TitleText>
        {router.pathname === "/admin" && (
          <EndProposalText>
            <ExceptionOutlined /> End Proposal
          </EndProposalText>
        )}
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
      <VotingContainer>
        <Poll
          id={`${title}_${votingEndTime}`}
          question={pollQuestion}
          answers={pollAnswers}
          onVote={handleVote}
        />
      </VotingContainer>
    </StyledCard>
  );
};

export default ItemCard;
