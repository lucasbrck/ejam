import styled from "styled-components";
import GreenCheck from "../../assets/GreenCheck.png";
import { Rate } from "antd";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Manrope";
  color: #000000;
  h1 {
    font-size: 48px;
    line-height: 48px;
  }
  h2 {
    font-size: 24px;
    line-height: 24px;
    color: #4d5254;
  }
`;

export const BlueCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #2c7ef8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
`;

export const GreenTick = styled.img`
  content: url(${GreenCheck});
  width: 40px;
  height: 40px;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const OutlinedCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #2c7ef8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c7ef8;
  font-size: 20px;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
`;

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  columns: 20px;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
`;
export const Itens = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  font-family: "Manrope";
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
`;
export const Label = styled.p``;

export const Step = styled.p`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 15px;
  background: #fafafa;
  border-radius: 10px;
  @media (max-width: 600px) {
    flex-direction: column
  }
`;

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const BuyContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const IconClarifion = styled.img`
  background: #2c7ef8;
  border-radius: 10px;
`;

export const SaveNow = styled.div`
  display: flex;
  padding: 12px 16px 12px 16px;
  border-radius: 10px;
  gap: 10px;
  align-items: center;
  background-color: #edf3fd;
  span {
    color: #2c7ef8;
  }
`;
export const ListBenefits = styled.div`
  margin-top: 25px;
  p {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;

    span {
      font-weight: bold;
    }
  }
`;
export const Title = styled.p`
  font-family: Manrope;
  font-size: 32px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  span {
    color: #2c7ef8;
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* justify-content: flex-start;
  align-items: flex-start; */
`;

export const Prices = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export const StyledRate = styled(Rate)`
  align-self: flex-start;
`;

export const Description = styled.p`
  align-self: flex-start;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5254;
`;

export const Claim = styled.button`
  width: 100%;
  padding: 16px 64px 16px 64px;
  border-radius: 50px;
  gap: 10px;
  background-color: #59ae43;
  font-family: Manrope;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0px;
  color:white;
  margin-bottom: 10px;
  text-align: center;
`;
