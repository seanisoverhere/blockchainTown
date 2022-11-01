import styled from "styled-components";
import colors from "@/utils/constants/colors";
import { Row, Select } from "antd";

export const DashboardContainer = styled.div`
  padding: 6rem 1.5rem;
`;

export const StyledRow = styled(Row)`
  && {
    padding-bottom: 2rem;
  }
`;

export const FilterText = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${colors.GREY};
`;

export const StyledSelect = styled(Select)`
  && {
    width: 300px;
  }
`;
