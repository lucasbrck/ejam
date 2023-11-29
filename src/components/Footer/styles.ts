import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: white;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  justify-content: space-around;
  background-color: #252f3d;
  padding: 10px 0;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
