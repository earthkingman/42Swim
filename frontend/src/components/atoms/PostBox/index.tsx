import styled, { css } from "styled-components";
import theme from "../../../style/theme";

interface SPostBoxProps {
  isChecked?: boolean;
}

const PostBoxStyles = css<SPostBoxProps>`
  ${({ isChecked }) =>
    isChecked == true &&
    css`
      border: 3px solid ${theme.color.yellow};
      box-shadow: none;
    `}
`;

const StyledPostBox = styled.div`
  width: 100%;
  /*height: 214px;*/
  /*display: flex;*/
  border-radius: 16px;
  background-color: white;
  padding: 50px 60px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  ${PostBoxStyles};
`;

export interface PostBoxProps extends SPostBoxProps {
  onClick?: any;
  children?: any;
}

const PostBox = ({ children, ...props }: PostBoxProps) => {
  return <StyledPostBox {...props}>{children}</StyledPostBox>;
};

export default PostBox;
