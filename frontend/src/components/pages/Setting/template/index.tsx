import styled, { css } from "styled-components";
import { ColumnSADiv, RowSBDiv } from "../../../atoms/Div";

const Wrapper = styled.div`
  padding: 0 5rem;
`;

const Panel1 = styled(RowSBDiv)`
  justify-content: flex-start;
  > * {
    margin-right: 3rem;
  }
`;

const ProfilePanel = styled(ColumnSADiv)`
  height: 300px;
  /* width: 25%; */
  justify-content: center;

  > * {
    margin-bottom: 2rem;
  }
`;

const Divide = styled.div`
  width: 0.5px;
  height: 150px;
  margin: 0 2rem;
  ${({ theme }) => css`
    border-left: 0.5px ${theme.color.deepgray} solid;
  `}
`;

const NamePanel = styled.div`
  width: 59%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;

  > * {
    margin-bottom: 1.5rem;
  }
`;

const BottonPanel = styled.div`
  > * {
    margin-top: 2rem;
  }

  > button {
    margin-top: 3rem;
  }
`;

interface Props {
  tlPanel: any;
  trPanel: any;
  bPanel: any;
}

const SettingTemplate = ({ tlPanel, trPanel, bPanel }: Props) => {
  return (
    <Wrapper>
      <Panel1>
        <ProfilePanel>{tlPanel}</ProfilePanel>
        <Divide />
        <NamePanel>{trPanel}</NamePanel>
      </Panel1>
      <BottonPanel>{bPanel}</BottonPanel>
    </Wrapper>
  );
};

export default SettingTemplate;
