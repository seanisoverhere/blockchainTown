import React from "react";
import {
  DashboardContainer,
  FilterText,
  StyledRow,
  StyledSelect,
} from "./styles";
import { Row, Col, Space } from "antd";
import { TitleText } from "./styles";

const { Option } = StyledSelect;

const Dashboard = () => {
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
