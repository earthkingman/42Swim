import styled, { css } from "styled-components";
import { ColumnSADiv, RowSBDiv } from "../../../atoms/Div";

const Panel1 = styled(RowSBDiv)``;

const ProfilePanel = styled(ColumnSADiv)`
  background: pink;
  height: 350px;
  width: 25%;
`;

const Divide = styled.div`
  width: 0.5px;
  height: 300px;
  ${({ theme }) => css`
    border-left: 0.5px ${theme.color.deepgray} solid;
  `}
`;

const NamePanel = styled.div`
  width: 73%;
  height: 350px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SettingTemplate = () => {
  return (
    <>
      <Panel1>
        <ProfilePanel />
        <Divide />
        <NamePanel />
      </Panel1>
    </>
  );
};

export default SettingTemplate;
