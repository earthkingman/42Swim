import styled from "styled-components";
import HideDiv from "../../atoms/HideDiv";
import Input from "../../atoms/Input";

export const EditNicknameInput = styled(Input)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  margin-right: 1.5rem;
`;

export const EditInput = styled(Input)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  padding: 10px 15px;
`;

export const NickHideDiv = styled(HideDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > button {
    margin-right: 1rem;
  }
`;
