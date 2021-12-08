import styled from "styled-components";
import Input from "../../atoms/Input";

export const SearchBox = styled.div`
  width: 55%;
  height: 43px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
  background: white;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  &:hover {
    border: 1px solid #c2c2c2;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`;

interface SInputProps {
  onKeyPress: any;
  onChange: any;
  onFocus: any;
  onBlur: any;
}

export const SInput = styled(Input)<SInputProps>`
  width: 500px;
  height: 41px;
  border-radius: 20px 0 0 20px;
`;

export const SButton = styled.button`
  width: 44px;
  height: 41px;
  float: right;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
