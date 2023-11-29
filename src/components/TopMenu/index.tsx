import * as S from "./styles";
import { Verified } from "@styled-icons/material-outlined";
import {
  VehicleTruckProfile,
  ArrowSyncCheckmark,
} from "@styled-icons/fluentui-system-regular";
import { Heart } from "@styled-icons/bootstrap";
import { StyledIcon } from "@styled-icons/styled-icon";
import { useState } from "react";

interface Options {
  label: string;
  icon: StyledIcon;
  active?: boolean;
}

const data: Options[] = [
  { label: "30-day satisfaction guarantee", icon: Verified },
  { label: "Free delivery on orders over $40.00", icon: VehicleTruckProfile },
  { label: "50.000+ Happy customers", icon: Heart },
  { label: "100% Money back guarantee", icon: ArrowSyncCheckmark },
];
const Menu = (): JSX.Element => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleLeft = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - 1
    );
  };
  const handleRight = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <S.Menu>
      <S.Left size={30} onClick={handleLeft} />
      <S.OptionContainer>
        {data.map((option, index) => {
          const Icon = option.icon;
          return (
            <S.MenuItem visible={visibleIndex === index} key={index}>
              <Icon size={25} style={{ marginRight: "5px" }} />
              {option.label}
            </S.MenuItem>
          );
        })}
      </S.OptionContainer>
      <S.Right size={30} onClick={handleRight} />
    </S.Menu>
  );
};

export default Menu;
