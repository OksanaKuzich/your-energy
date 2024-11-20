import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utiles/devices";

export const HeaderSection = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.tablet} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media ${device.desktop} {
    padding-top: 28px;
    padding-bottom: 28px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    gap: 18px;
    color: ${(props) => props.theme.colors.main};
    background-color: ${(props) => props.theme.colors.accent};
    font-size: ${(props) => props.theme.fontSizes.fs16};
    border-radius: 60px;
    padding: 14px 50px;
  }
`;

export const LinkNav = styled(NavLink)`
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.pagination};
  }

  &.active {
    color: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.main};
    padding: 6px 12px;
    border-radius: 30px;

    &:hover,
    &:focus {
      color: #242424af;
    }
  }
`;

export const MessengersList = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`;

export const MessengerItem = styled.li`
  border: 1px #2424241a solid;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: #2424241a;
  }

  & > a {
    display: block;
    padding: 8px;
  }
`;

export const MobMenuBtn = styled.button`
  border: none;
  background-color: transparent;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-radius: 5px;
    outline: 1px #2424241a solid;
  }

  & > img {
    padding: 3px 2px;
  }

  @media ${device.tablet} {
    display: none;
  }
`;
