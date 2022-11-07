import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Datastore from "@/contracts/Datastore.json";
import ProposalContract from "@/contracts/ProposalContract.json";
import { ethers } from "ethers";
import {
  ButtonContainer,
  CardContainer,
  ConnectText,
  DashboardContainer,
  DirectorName,
  FlexContainer,
  StyledButton,
  StyledImg,
  Title,
  EndProposalText,
} from "./styles";
import ProposalModal from "@/components/ProposalModal";
import ItemCard from "@/components/ItemCard";
import { Row, Col } from "antd";
import {
  datastoreAddress,
  proposalAddress,
  directorAddress,
} from "@/utils/constants/blockchainAddresses";
import { ExceptionOutlined } from "@ant-design/icons";

const Admin = () => {
  const [hasSetDirector, setHasSetDirector] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [directorName, setDirectorName] = useState<string>("");
  const [allProposalDetails, setAllProposalDetails] = useState<any>([]);

  useEffect(() => {
    setHasSetDirector(!!localStorage.getItem("address"));
    seeProposals();
  }, []);

  useEffect(() => {
    if (hasSetDirector) {
      getDirector();
    }
  }, [hasSetDirector]);

  useEffect(() => {
    console.log(allProposalDetails);
  }, [allProposalDetails]);

  const web3 = new Web3(typeof window !== "undefined" && window.ethereum);

  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const addDirector = async () => {
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
      const transaction = await contract.addDirector(
        directorAddress,
        "Keith Long"
      );
      localStorage.setItem("address", directorAddress);
      setHasSetDirector(true);
      await transaction.wait();
    }
  };

  const getDirector = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      datastoreAddress,
      Datastore.abi,
      provider
    );
    try {
      const name = await contract.getDirector(localStorage.getItem("address"));
      setDirectorName(name);
    } catch (error) {
      console.log(error);
    }
  };

  const addProposal = async (
    proposalName: string,
    budget: Number,
    votingEndDate: Number
  ) => {
    if (typeof window.ethereum != "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        proposalAddress,
        ProposalContract.abi,
        signer
      );
      const transaction = await contract.addProposal(
        proposalName,
        budget,
        votingEndDate
      );
      await transaction.wait();
    }
  };

  const seeProposals = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      proposalAddress,
      ProposalContract.abi,
      provider
    );
    try {
      let tempArray = [];
      const data = await contract.getAllProposals();
      for (const proposal of data) {
        const proposalData = await contract.getProposalInfo(proposal);
        tempArray.push({
          [proposal]: proposalData,
        });
      }
      setAllProposalDetails(tempArray);
    } catch (error) {
      console.log(error);
    }
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

  const sendMoney = async () => {
    if (typeof window.ethereum != "undefined") {
      const createTransaction = await web3.eth.accounts.signTransaction(
        {
          from: "0xa5F0f4478077D873f1c9B96A1dcd42c0f13F8519",
          to: "0x678B618a49C9F94E63E4B825b320c6BD5C4c7955",
          value: web3.utils.toWei("10", "ether"),
          gas: "21000",
        },
        "ce518da9e2a91a8908af82789077477efd58e6cfe0a3ff3cb904f23bf8199a62"
      );
      try {
        await web3.eth.sendSignedTransaction(
          createTransaction.rawTransaction as string
        );
      } catch (error) {
        console.log("not enough money");
      }
    }
  };

  return (
    <DashboardContainer>
      <ProposalModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        addProposal={addProposal}
      />
      <FlexContainer>
        <Title>Directors' Proposal Console</Title>
        {hasSetDirector && (
          <StyledButton onClick={() => setIsModalOpen(true)}>
            Add a proposal
          </StyledButton>
        )}
      </FlexContainer>
      {hasSetDirector ? (
        <>
          <FlexContainer>
            <DirectorName>Welcome, {directorName}</DirectorName>
            <>
              {allProposalDetails.length > 0 && (
                <EndProposalText onClick={() => handleEndProposal()}>
                  <ExceptionOutlined /> End Proposals
                </EndProposalText>
              )}
            </>
          </FlexContainer>
          <CardContainer>
            <Row gutter={[24, 24]} style={{ paddingBottom: "3rem" }}>
              {allProposalDetails.map((proposal: any) => {
                return Object.entries(proposal).map(
                  ([key, value]: [string, any]) => {
                    console.log(value);
                    return (
                      <Col span={8}>
                        <ItemCard
                          key={key}
                          title={key}
                          budget={value.budget["_hex"]}
                          voteYes={value.voteYes["_hex"]}
                          voteNo={value.voteNo["_hex"]}
                          votingEndTime={value.votingEndTime["_hex"]}
                        />
                      </Col>
                    );
                  }
                );
              })}
            </Row>
          </CardContainer>
        </>
      ) : (
        <ButtonContainer onClick={addDirector}>
          <ConnectText>Connect your Metamask:</ConnectText>
          <StyledImg src="/metamask.png" alt="Metamask" />
        </ButtonContainer>
      )}
    </DashboardContainer>
  );
};

export default Admin;
