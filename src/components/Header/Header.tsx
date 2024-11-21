import { Link } from "react-router-dom";
import { messengers, navItems } from "./data";
import Menu from "../../images/menu.svg";
import Logo from "../../images/logo.png";
import { Container } from "../Container/Container.styled";
import {
  HeaderSection,
  HeaderWrapper,
  NavList,
  LinkNav,
  MessengersList,
  MessengerItem,
  MobMenuBtn,
} from "./Header.style";

export const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <img src={Logo} alt="Your energy logo" />
          </Link>
          <nav>
            <NavList>
              {navItems.map(({ href, text }) => (
                <li key={href}>
                  <LinkNav to={href} key={href}>
                    {text}
                  </LinkNav>
                </li>
              ))}
            </NavList>
          </nav>
          <MessengersList>
            {messengers.map(({ name, icon, href }) => {
              return (
                <MessengerItem key={name}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <img src={icon} alt={name} />
                  </a>
                </MessengerItem>
              );
            })}
          </MessengersList>
          <MobMenuBtn>
            <img src={Menu} alt="Mobile menu icon" />
          </MobMenuBtn>
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};
