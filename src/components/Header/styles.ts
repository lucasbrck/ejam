import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95%;
  padding: 10px;
  margin: 0 auto;
  justify-content: space-between;
  img {
    height: 36px;
  }
  @media (max-width: 600px) {
    img {
      height: 20px;
    }
  }
`;

export const AvContainer = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    height: 32px;
  }
  @media (max-width: 600px) {
    img {
      height: 16px;
    }
  }
`;
