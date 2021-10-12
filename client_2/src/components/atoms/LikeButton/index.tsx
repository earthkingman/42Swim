import styled from "styled-components";

export const StyledLikeButton = styled.button`
  background-color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 20px;
  width: 83px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  letter-spacing: 0.05em;
`;
export interface LikeButtonProps {
  onClick?: any;
  children: any;
  className?: string;
}
/**
 * TODO: 클릭 시 아이콘 변경하기
 */
const LikeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

const LikeButton = ({ children, ...props }: LikeButtonProps) => {
  return (
    <StyledLikeButton {...props}>
      <LikeIcon />
      {children}
    </StyledLikeButton>
  );
};

export default LikeButton;
