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
  display: flex;
  flex-direction: row;
  gap: 18px;
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.fs16};
  border-radius: 60px;
  padding: 8px 50px;
`;
