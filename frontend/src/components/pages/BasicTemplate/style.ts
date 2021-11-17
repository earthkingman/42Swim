import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20rem;
  @media (max-width: 1023px) {
    padding: 0 3rem;
  }
`;

export const Header = styled.div`
  height: 5%;
  margin-bottom: 2rem;
`;

export default {};
