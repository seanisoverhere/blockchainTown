import React, { useEffect } from "react";
import {
  DashboardContainer,
  FilterText,
  StyledRow,
  StyledSelect,
} from "./styles";
import { Row, Col, Space } from "antd";
import { TitleText } from "./styles";
import { ethers } from "ethers";
import ProposalContract from "@/contracts/ProposalContract.json";

const { Option } = StyledSelect;

const Dashboard = () => {
  const proposalAddress = "0x99a80868A62308E77eCa5FD5877a77A9C5612a0C";

  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const voteProposal = async () => {
    if (typeof window.ethereum != "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        proposalAddress,
        ProposalContract.abi,
        signer
      );
      const transaction = await contract.voteProposal("prop", true);
      await transaction.wait();
    }
  };

  // useEffect(() => {
  //   voteProposal();
  // }, []);

  return (
    <DashboardContainer>
      <StyledRow justify="space-between" align="bottom">
        <TitleText>List of available projects</TitleText>
        <Space direction="vertical">
          <FilterText>Filter By:</FilterText>-
          <StyledSelect defaultValue="hello">
            <Option value="hello">Hello</Option>
            <Option value="hello2">Hello2</Option>
            <Option value="hello3">Hello3</Option>
          </StyledSelect>
        </Space>
      </StyledRow>
      <Row gutter={[24, 24]}>
        <Col></Col>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
