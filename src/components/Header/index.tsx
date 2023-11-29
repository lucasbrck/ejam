import * as S from "./styles";
import Logo from "../../assets/Logo.png";
import Av1 from "../../assets/Av1.png";
import Av2 from "../../assets/Av2.png";


const Header = () => {
  return (
    <S.Container>
      <img src={Logo} />
      <S.AvContainer>
        <img src={Av1} />
        <img src={Av2}  style={{ marginLeft: "40px" }} />
      </S.AvContainer>
    </S.Container>
  );
};

export default Header;
