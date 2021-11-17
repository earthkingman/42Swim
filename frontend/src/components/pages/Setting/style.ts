import styled from "styled-components";
import HideDiv from "../../atoms/HideDiv";
import Input from "../../atoms/Input";

export const EditNicknameInput = styled(Input)`
  font-size: 24px;
  padding: 10px 20px;
  width: 340px;
  margin-right: 1.5rem;
`;

export const NickHideDiv = styled(HideDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > * {
    margin-right: 1rem;
  }
`;
