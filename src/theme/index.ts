import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";

import { RFValue } from "../utils/functions/ResponsiveFontSizes";

import darkMode from "./darkMode";
import { palette } from "./palette";
import { PaddingSizesObjectType } from "./type";

const lightTheme = createTheme({
  borderRadii: {
    lg: RFValue(32),
    sml: RFValue(24),
    md: RFValue(16),
    none: 0,
    sm: RFValue(8),
    xl: RFValue(64),
    xs: RFValue(4),
  },

  breakpoints: {
    largeScreen: 412,
    phone: 0,
    tablet: 768,
  },

  buttonGradients: {
    primary: [palette.secondaryColor, palette.secondary6, palette.primaryColor],
    secondary: [palette.gradientBlueTop, palette.gradientBlueBottom],
    tatiary: [palette.gradientGreenTop, palette.gradientGreenBottom],
  },
  buttonSizes: {
    lg: {
      paddingHorizontal: "xl",
      paddingVertical: "lg",
    },
    md: {
      paddingHorizontal: "lg",
      paddingVertical: "md",
    },
    none: {
      paddingHorizontal: "none",
      paddingVertical: "none",
    },
    sm: {
      paddingHorizontal: "md",
      paddingVertical: "sm",
    },
    xl: {
      paddingHorizontal: "xxl",
      paddingVertical: "xl",
    },
    xs: {
      paddingHorizontal: "sm",
      paddingVertical: "xs",
    },
  } as PaddingSizesObjectType,

  buttonVariants: {
    defaults: {
      borderRadius: "sm",
    },
    filled: {
      backgroundColor: "primaryColor",
    },
    ghost: {
      backgroundColor: "paleGrey50",
    },
    none: {},
    outlined: {
      borderColor: "paleGrey",
      borderWidth: RFValue(1),
    },
    transparent: {
      backgroundColor: "transparent",
    },
  },

  colors: {
    ...palette,
    imageBackgroundTint: palette.primaryColor,
    mainBackground: palette.whiteColor,
    textColor: palette.darkGrey,
    textColorInverted: palette.whiteColor,
    primarybackground: palette.white,
    primarythemecolor: palette.backgroundblack,
  },

  fontSizes: {
    caption: RFValue(12),
    h1: RFValue(32),
    h2: RFValue(24),
    h3: RFValue(20),
    h4: RFValue(18),
    h5: RFValue(16),
    h6: RFValue(14),
    p: RFValue(14),
    s: RFValue(6),
  },

  iconSizes: {
    lg: {
      height: RFValue(32),
      width: RFValue(32),
    },
    m: {
      height: RFValue(12),
      width: RFValue(12),
    },
    mm: {
      height: RFValue(16),
      width: RFValue(17),
    },
    md: {
      height: RFValue(24),
      width: RFValue(24),
    },
    s: {
      height: RFValue(4),
      width: RFValue(4),
    },
    sml: {
      height: RFValue(20),
      width: RFValue(20),
    },
    sm: {
      height: RFValue(16),
      width: RFValue(16),
    },
    xl: {
      height: RFValue(48),
      width: RFValue(48),
    },
    xll: {
      height: RFValue(32),
      width: RFValue(99),
    },
    xxl: {
      height: RFValue(60),
      width: RFValue(60),
    },
    xs: {
      height: RFValue(8),
      width: RFValue(8),
    },
    xsl: {
      height: RFValue(108),
      width: RFValue(120),
    },
    xxxl: {
      height: RFValue(138),
      width: RFValue(180),
    },
  },

  spacing: {
    lg: RFValue(32),
    md: RFValue(16),
    mmd: RFValue(20),
    none: 0,
    sm: RFValue(8),
    sml: RFValue(24),
    ss: RFValue(6),
    ssm: RFValue(8),
    xl: RFValue(64),
    xs: RFValue(4),
    xxl: RFValue(128),
    xxs: RFValue(2),
    xxxs: RFValue(1),
    rs: RFValue(-200),
    rlg: RFValue(-100),
    rr: RFValue(-30),
  },

  textInputSizes: {
    lg: {
      paddingHorizontal: "lg",
      paddingVertical: "lg",
    },
    md: {
      paddingHorizontal: "md",
      paddingVertical: "md",
    },
    none: {
      paddingHorizontal: "none",
      paddingVertical: "none",
    },
    sm: {
      paddingHorizontal: "sm",
      paddingVertical: "sm",
    },
    xl: {
      paddingHorizontal: "xl",
      paddingVertical: "xl",
    },
    xs: {
      paddingHorizontal: "xs",
      paddingVertical: "xs",
    },
  } as PaddingSizesObjectType,

  textInputVariants: {
    defaults: {
      borderRadius: "sm",
      fontSize: RFValue(14),
      fontWeight: "500",
    },
    filled: {
      backgroundColor: "paleGrey50",
      color: "primaryBlack",
    },
    none: {},
    outlined: {
      borderColor: "paleGrey",
      borderWidth: RFValue(1),
    },
    transparent: {
      backgroundColor: "transparent",
    },
  },

  textVariants: {
    body: {},
    bold8: {
      color: "darkGrey",
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(8),
      fontWeight: "700",
      lineHeight: RFValue(16),
    },
    bold10: {
      color: "darkGrey",
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(10),
      fontWeight: "700",
      lineHeight: RFValue(16),
    },
    bold12: {
      color: "darkGrey",
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(12),
      fontWeight: "700",
      lineHeight: RFValue(16),
    },
    bold14: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(14),
      fontWeight: "700",
    },
    bold16: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(16),
      fontWeight: "700",
    },
    bold18: {
      color: "textColor",
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(18),
      fontWeight: "700",
    },
    bold22: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(22),
      fontWeight: "700",
    },
    bold24: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(24),
      fontWeight: "100",
    },
    bold32: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(32),
      fontWeight: "100",
    },
    bold48: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(48),
      fontWeight: "100",
    },
    defaults: {
      color: "primaryBlack",
      fontSize: RFValue(14),
    },
    medium10: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(10),
      fontWeight: "400",
    },
    medium12: {
      color: "textColor",
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(12),
      fontWeight: "400",
    },
    medium14: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(14),
      fontWeight: "400",
    },
    medium16: {
      color: "textColor",
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(16),
      fontWeight: "400",
      lineHeight: RFValue(16),
    },
    medium18: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(18),
      fontWeight: "400",
    },
    medium22: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(22),
      fontWeight: "400",
    },
    medium8: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(8),
      fontWeight: "400",
    },
    none: {},
    regular9: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(9),
      fontWeight: "400",
      lineHeight: RFValue(16),
    },
    regular10: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(10),
      fontWeight: "400",
      lineHeight: RFValue(16),
    },
    regular12: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(12),
      fontWeight: "400",
      lineHeight: RFValue(16),
    },
    regular14: {
      color: "textColor",
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(14),
      fontWeight: "400",
      lineHeight: RFValue(16),
    },
    regular16: {
      color: "textColor",
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(16),
      fontWeight: "400",
      lineHeight: RFValue(20),
    },
    regular18: {
      color: "textColor",
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(18),
      fontWeight: "400",
      lineHeight: RFValue(18),
    },
    regular22: {
      color: "textColor",
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(22),
      fontWeight: "100",
      lineHeight: RFValue(22),
    },
    regular8: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(8),
      fontWeight: "400",
    },
    font10: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(10),
      fontWeight: "400",
      lineHeight: RFValue(16),
    },
    font12: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(12),
      fontWeight: "400",
    },
    font14: {
      color: "textColor",
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(14),
      fontWeight: "400",
    },
    font8: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(8),
      fontWeight: "400",
    },
    title: {
      fontSize: RFValue(32),
    },
  },

  zIndices: {
    modal: 100,
    overlay: 10,
  },
});

export type Theme = typeof lightTheme;

export const useTheme = () => useRestyleTheme<Theme>();

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...darkMode.colors,
  },
};

export default { darkTheme, lightTheme };
