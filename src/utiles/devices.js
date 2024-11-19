const size = {
  mobileOnly: "374px",
  mobile: "375px",
  tabletOnly: "767px",
  tablet: "768px",
  beforeDesktop: "1439px",
  desktop: "1440px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,

  beforeTablet: `(max-width: ${size.tabletOnly})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(min-width:${size.tablet}) and (max-width:${size.beforeDesktop})`,

  beforeDesktop: `(max-width: ${size.beforeDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

// how to use:
// @media ${device.tablet} {}
