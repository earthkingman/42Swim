import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  > * {
    padding: 0 20rem;

    @media (min-width: 768) and (max-width: 1023px) {
      padding: 0 3rem;
    }
    @media (max-width: 767px) {
      padding: 0 1.5rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export default {};
