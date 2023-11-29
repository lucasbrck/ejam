import * as S from "./styles";
import Image from "../../assets/image1.png";
import Icon from "../../assets/clarifionIcon.png";
import Frame from "../../assets/CreditCardFrame.png";

import { Done } from "@styled-icons/material";

type IconType = "fullfiled" | "pending" | "active";
interface Steps {
  type: IconType;
  label: string;
}
const Content = () => {
  const steps: Steps[] = [
    { type: "fullfiled", label: "Cart Review" },
    { type: "fullfiled", label: "Checkout" },
    { type: "active", label: "Special Offer" },
    { type: "pending", label: "Confirmation" },
  ];

  const getIcon = (type: IconType, index: number) => {
    switch (type) {
      case "fullfiled":
        return <S.GreenTick key={index} />;
      case "active":
        return <S.BlueCircle key={index}>{index + 1}</S.BlueCircle>;
      case "pending":
        return <S.OutlinedCircle key={index}>{index + 1}</S.OutlinedCircle>;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <h1>Wait! Your order is in progress.</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
      <S.StepsContainer>
        {steps.map((step, index) => (
          <S.Itens key={index}>
            <div style={{ marginRight: "10px" }}>
              {getIcon(step.type, index)}
            </div>
            <S.Step>{`Step ${index + 1} :`}</S.Step>
            <S.Label>{step.label}</S.Label>
          </S.Itens>
        ))}
      </S.StepsContainer>
      <S.ImagesContainer>
        <img src={Image} alt="" />
        <S.OfferContainer>
          <S.Title>
            <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
            only <span>$14 each</span> ($84.00 total!)
          </S.Title>
          <S.BuyContent>
            <S.IconClarifion src={Icon} />
            <S.ItemDescription>
              <S.Prices>
                <p>Clarifion Air Ionizer</p>
                <div>
                  <p
                    style={{
                      color: "#969696",
                    }}
                  >
                    $180
                  </p>
                  <p
                    style={{
                      marginLeft: "10px",
                      fontSize: "22px",
                      color: "#2c7ef8",
                    }}
                  >
                    $84
                  </p>
                </div>
              </S.Prices>
              <S.StyledRate value={5} />
              <S.Description>
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </S.Description>
            </S.ItemDescription>
          </S.BuyContent>
          <S.ListBenefits>
            <p>
              <Done size={25} color={"#2C7EF8"} />
              Negative Ion Technology may <span>help with allergens</span>
            </p>
            <p>
              <Done size={25} color={"#2C7EF8"} />
              Designed for <span> air rejuvenation</span>
            </p>
            <p>
              <Done size={25} color={"#2C7EF8"} />
              <span>Perfect for every room</span> in all types of places.
            </p>
          </S.ListBenefits>
          <S.SaveNow>
            <S.BlueCircle>%</S.BlueCircle>
            <p>
              Save <span>53%</span> and get <span>6 extra Clarifision</span> for
              only <span>$14 Each</span>.
            </p>
          </S.SaveNow>
          <S.Claim>{"Yes - Claim my discount ->"}</S.Claim>
          <img src={Frame}/>
          <p style={{ color: "red", fontFamily: "Manrope", fontSize: "18px", textDecoration: "underline",  marginTop: "10px" }}>
            No thanks, I don’t want this.
          </p>
        </S.OfferContainer>
      </S.ImagesContainer>
    </S.Container>
  );
};
export default Content;
