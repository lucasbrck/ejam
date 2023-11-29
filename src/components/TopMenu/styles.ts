import styled from "styled-components";
import { ArrowLeftS, ArrowRightS } from "@styled-icons/remix-line";

export const Menu = styled.div`
  display: flex;
  color: white;
  justify-content: space-around;
  background-color: #252f3d;
  padding: 10px 0;
`;

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const Left = styled(ArrowLeftS)`
  display: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const Right = styled(ArrowRightS)`
  display: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: flex;
  }
`;
interface MenuItemProps {
  visible: boolean;
}
export const MenuItem = styled.div<MenuItemProps>`
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px) {
    display: ${(p) => (p.visible ? `block` : `none`)};
  }
`;
