import React from "react";
import { DashboardContainer } from "./styles";
import ItemCard from "@/components/ItemCard";
import { Row, Col } from "antd";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <ItemCard />
        </Col>
        <Col span={8}>
          <ItemCard />
        </Col>
        <Col span={8}>
          <ItemCard />
        </Col>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
