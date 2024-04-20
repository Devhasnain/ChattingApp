import { makeStyles } from "@rneui/themed";
import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = makeStyles((theme) => ({
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  itemsCenter: {
    alignItems: "center",
  },
  itemsStart: {
    alignItems: "flex-start",
  },
  itemsEnd: {
    alignItems: "flex-end",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },

  // Padding utility classes
  p1: {
    padding: 8,
  },
  p2: {
    padding: 16,
  },
  p3: {
    padding: 24,
  },
  pt1: {
    paddingTop: 8,
  },
  pt2: {
    paddingTop: 16,
  },
  pt3: {
    paddingTop: 24,
  },
  pr1: {
    paddingRight: 8,
  },
  pr2: {
    paddingRight: 16,
  },
  pr3: {
    paddingRight: 24,
  },
  pb1: {
    paddingBottom: 8,
  },
  pb2: {
    paddingBottom: 16,
  },
  pb3: {
    paddingBottom: 24,
  },
  pl1: {
    paddingLeft: 8,
  },
  pl2: {
    paddingLeft: 16,
  },
  pl3: {
    paddingLeft: 24,
  },

  // Margin utility classes
  m1: {
    margin: 8,
  },
  m2: {
    margin: 16,
  },
  m3: {
    margin: 24,
  },
  mt1: {
    marginTop: 8,
  },
  mt2: {
    marginTop: 16,
  },
  mt3: {
    marginTop: 24,
  },
  mr1: {
    marginRight: 8,
  },
  mr2: {
    marginRight: 16,
  },
  mr3: {
    marginRight: 24,
  },
  mb1: {
    marginBottom: 8,
  },
  mb2: {
    marginBottom: 16,
  },
  mb3: {
    marginBottom: 24,
  },
  ml1: {
    marginLeft: 8,
  },
  ml2: {
    marginLeft: 16,
  },
  ml3: {
    marginLeft: 24,
  },
  // Flexbox utility classes
  flexWrap: {
    flexWrap: "wrap",
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  alignSelfStretch: {
    alignSelf: "stretch",
  },

  // Text utility classes
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  textLeft: {
    textAlign: "left",
  },
  textBold: {
    fontWeight: "bold",
  },
  textItalic: {
    fontStyle: "italic",
  },
  textSizeSmall: {
    fontSize: 12,
  },
  textSizeMedium: {
    fontSize: 16,
  },
  textSizeLarge: {
    fontSize: 20,
  },

  // Border utility classes
  rounded: {
    borderRadius: 8,
  },
  roundedCircle: {
    borderRadius: 9999, // A large enough value for a circle
  },
  borderWidth: {
    borderWidth: 1,
  },
  borderColor: {
    borderColor: "#000", // Set your preferred color
  },

  // Background utility classes
  bgPrimary: {
    backgroundColor: "#007BFF", // Set your primary color
  },
  bgSecondary: {
    backgroundColor: "#6C757D", // Set your secondary color
  },
  bgSuccess: {
    backgroundColor: "#28A745", // Set your success color
  },
  bgWarning: {
    backgroundColor: "#FFC107", // Set your warning color
  },
  bgDanger: {
    backgroundColor: "#DC3545", // Set your danger color
  },

  // Additional utility classes
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },

  // Flexbox utility classes
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  alignSelfBaseline: {
    alignSelf: "baseline",
  },
  alignSelfAuto: {
    alignSelf: "auto",
  },

  // Margin utility classes
  mxAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  myAuto: {
    marginTop: "auto",
    marginBottom: "auto",
  },

  // Padding utility classes
  px4: {
    paddingHorizontal: 32,
  },
  py4: {
    paddingVertical: 32,
  },

  // Text utility classes
  textUppercase: {
    textTransform: "uppercase",
  },
  textLowercase: {
    textTransform: "lowercase",
  },
  textCapitalized: {
    textTransform: "capitalize",
  },
  lineHeight1: {
    lineHeight: 16,
  },
  lineHeight2: {
    lineHeight: 24,
  },
  lineHeight3: {
    lineHeight: 32,
  },
  lineHeight4: {
    lineHeight: 40,
  },

  // BorderRadius utility classes (ascending order)
  roundedTiny: {
    borderRadius: 2,
  },
  roundedSmall: {
    borderRadius: 4,
  },
  roundedMedium: {
    borderRadius: 8,
  },
  roundedLarge: {
    borderRadius: 12,
  },
  roundedXLarge: {
    borderRadius: 16,
  },
  roundedXXLarge: {
    borderRadius: 20,
  },
  roundedXXXLarge: {
    borderRadius: 24,
  },

  // Background utility classes
  bgLight: {
    backgroundColor: "#f8f9fa",
  },
  bgDark: {
    backgroundColor: "#343a40",
  },
  bgInfo: {
    backgroundColor: "#17a2b8",
  },
  bgLightGray: {
    backgroundColor: "#e0e0e0",
  },
  bgTransparent: {
    backgroundColor: "transparent",
  },

  // Shadow utility classes
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowLarge: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },

  // Font size utility classes
  textXSmall: {
    fontSize: 12,
  },
  textSmall: {
    fontSize: 14,
  },
  textMedium: {
    fontSize: 16,
  },
  textLarge: {
    fontSize: 18,
  },
  textXLarge: {
    fontSize: 20,
  },
  text2XLarge: {
    fontSize: 24,
  },
  text3XLarge: {
    fontSize: 28,
  },
  text4XLarge: {
    fontSize: 32,
  },
  text5XLarge: {
    fontSize: 36,
  },
  text6XLarge: {
    fontSize: 40,
  },

  // Font weight utility classes

  fontLight: {
    fontWeight: "300",
  },
  fontNormal: {
    fontWeight: "400",
  },
  fontMedium: {
    fontWeight: "500",
  },
  fontBold: {
    fontWeight: "700",
  },
  fontExtraBold: {
    fontWeight: "800",
  },
  fontBlack: {
    fontWeight: "900",
  },

  // Custom width utility classes
  w10: {
    width: 10,
  },
  w20: {
    width: 20,
  },
  w30: {
    width: 30,
  },
  w40: {
    width: 40,
  },
  w50: {
    width: 50,
  },
  w60: {
    width: 60,
  },
  w70: {
    width: 70,
  },
  w80: {
    width: 80,
  },
  w90: {
    width: 90,
  },
  w100: {
    width: 100,
  },

  // Custom height utility classes
  h10: {
    height: 10,
  },
  h20: {
    height: 20,
  },
  h30: {
    height: 30,
  },
  h40: {
    height: 40,
  },
  h50: {
    height: 50,
  },
  h60: {
    height: 60,
  },
  h70: {
    height: 70,
  },
  h80: {
    height: 80,
  },
  h90: {
    height: 90,
  },
  h100: {
    height: 100,
  },

  // Dynamic width utility classes
  w10vw: {
    width: windowWidth * 0.1, // 10% of the screen width
  },
  w20vw: {
    width: windowWidth * 0.2, // 20% of the screen width
  },
  w30vw: {
    width: windowWidth * 0.3, // 30% of the screen width
  },
  w40vw: {
    width: windowWidth * 0.4, // 40% of the screen width
  },
  w50vw: {
    width: windowWidth * 0.5, // 50% of the screen width
  },
  w60vw: {
    width: windowWidth * 0.6, // 60% of the screen width
  },
  w70vw: {
    width: windowWidth * 0.7, // 70% of the screen width
  },
  w80vw: {
    width: windowWidth * 0.8, // 80% of the screen width
  },
  w90vw: {
    width: windowWidth * 0.9, // 90% of the screen width
  },
  w100vw: {
    width: windowWidth, // 100% of the screen width
  },
}));

export default styles;