import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Datastore from "@/contracts/Datastore.json";
import { ethers } from "ethers";
import {
  ButtonContainer,
  ConnectText,
  DashboardContainer,
  DirectorName,
  StyledImg,
  Title,
} from "./styles";

const Admin = () => {
  const [hasSetDirector, setHasSetDirector] = useState<boolean>(false);
  const [directorName, setDirectorName] = useState<string>("");

  useEffect(() => {
    setHasSetDirector(!!localStorage.getItem("address"));
  }, []);

  const datastoreAddress = "0x0802CACD0Eff47d548F06a355b163cB33e2770C3";
  const proposalAddress = "0xe1f437C4dc88d38C2536579B1f52e34F72134cb3";
  const metamaskAddress = "0x678B618a49C9F94E63E4B825b320c6BD5C4c7955";

  const web3 = new Web3(typeof window !== "undefined" && window.ethereum);

  async function addDirector() {
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
        metamaskAddress,
        "Keith Long"
      );
      console.log(transaction);
      localStorage.setItem("address", metamaskAddress);
      setHasSetDirector(true);
      await transaction.wait();
    }
  }

  async function getDirector() {
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
  }

  async function sendMoney() {
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
  }

  return (
    <DashboardContainer>
      <Title>Directors' Proposal Console</Title>
      {hasSetDirector ? (
        (console.log(getDirector()),
        (<DirectorName>Welcome, {directorName}</DirectorName>))
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
