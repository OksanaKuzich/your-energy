import { Link } from "react-router-dom";
import { messengers } from "./data";
import { Container } from "../Container/Container.styled";
import { HeaderSection, HeaderWrapper, NavList } from "./Header.style";

const logo = require("../../images/logo.png");

export const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <img src={logo} alt="Your energy logo" />
          </Link>
          <nav>
            <NavList>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </NavList>
          </nav>
          <ul>
            {messengers.map(({ name, icon, href }) => {
              return (
                <li key={name}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <img src={icon} alt={name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};
