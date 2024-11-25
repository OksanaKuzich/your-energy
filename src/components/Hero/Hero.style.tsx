import styled from "styled-components";
import { device } from "../../utiles/devices";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;

  /* @media ${device.tablet} {
    display: flex;
    gap: 20px;
  }

  @media ${device.desktop} {
    gap: 50px;
  } */
`;

export const TagSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 197px;
`;

export const TagItem = styled.li`
  border: 1px solid #242424;
  padding: 4px 16px;
  border-radius: 30px;
  font-size: ${(props) => props.theme.fontSizes.fs16};
`;
