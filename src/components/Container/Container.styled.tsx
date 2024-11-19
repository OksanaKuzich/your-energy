import styled from "styled-components";
import { device } from "../../utiles/devices";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  /* box-sizing: border-box; */

  /* @media screen and (min-width: 375px) {
    max-width: 375px;
  } */
  @media ${device.tablet} {
    padding: 0 32px;
    max-width: 768px;
  }
  @media ${device.desktop} {
    padding: 0 32px;
    max-width: 1440px;
  }
`;
