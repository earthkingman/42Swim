import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  > * {
    padding: 0 20rem;

    @media (max-width: 1023px) {
      padding: 0 3rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default {};
