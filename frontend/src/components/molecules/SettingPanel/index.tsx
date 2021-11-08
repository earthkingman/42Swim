import styled, { css } from "styled-components";
import { RowSBDiv } from "../../atoms/Div";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    border-bottom: 1px ${theme.color.lightgrey} solid;
  `}
`;

const Content = styled(RowSBDiv)`
  padding: 1.5rem 0;
`;

const Name = styled(Title)`
  width: 20%;
`;

const Value = styled(Text)`
  width: 65%;
`;

const Etc = styled(RowSBDiv)`
  width: 15%;
`;

const Desc = styled(Text)`
  margin-bottom: 1.5rem;
`;

interface Props {
  name: string;
  value: string;
  etc?: any;
  desc?: string;
}

const SettingPanel = ({ name, value, etc, desc }: Props) => {
  return (
    <Wrapper>
      <Content>
        <Name size="h2">{name}</Name>
        <Value weight="normal" size="20">
          {value}
        </Value>
        <Etc>{etc}</Etc>
      </Content>
      <Desc size="14" color="lightgrey">
        {desc}
      </Desc>
    </Wrapper>
  );
};

export default SettingPanel;
