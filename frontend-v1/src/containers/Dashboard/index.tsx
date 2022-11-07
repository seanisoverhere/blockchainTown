import React, { useState, useEffect } from "react";
import { DashboardContainer, StyledRow } from "./styles";
import { Row, Col } from "antd";
import { TitleText } from "./styles";
import ItemCard from "@/components/ItemCard";
import ProposalContract from "@/contracts/ProposalContract.json";
import { ethers } from "ethers";

const Dashboard = () => {
  const [allProposalDetails, setAllProposalDetails] = useState<any>([]);

  const proposalAddress = "0xe8b00d59B0E371d3d1b71D1306FACbA45862784b";
  const voterAddress = "0xcb65A614A8c30410e6E6c72DCD6B845AeAB35df0";

  useEffect(() => {
    seeProposals();
  }, []);

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

  return (
    <DashboardContainer>
      <StyledRow justify="space-between" align="bottom">
        <TitleText>List of Available Projects</TitleText>
      </StyledRow>
      <Row gutter={[24, 24]} style={{ paddingBottom: "3rem" }}>
        {allProposalDetails.map((proposal: any) => {
          return Object.entries(proposal).map(([key, value]: [string, any]) => {
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
          });
        })}
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
