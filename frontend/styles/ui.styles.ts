import { makeStyles } from "@rneui/themed";
import { Platform } from "react-native";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  overflowHidden: {
    overflow: "hidden",
  },
  h_225: {
    height: 225,
  },
  f_bold: {
    fontWeight: "bold",
  },
  w_full: {
    width: "100%",
  },
  h_full: {
    height: "100%",
  },
  w_330: {
    width: 330,
  },
  w_30: {
    width: "30%",
  },
  w_120:{
    width:120
  },
  h_120:{
    height:120
  },
  h_30: {
    height: 30,
  },
  w_40: {
    width: "40%",
  },
  h_40: {
    height: 40,
  },
  pt_1:{
    paddingTop:1
  },
  pt_2:{
    paddingTop:2
  },
  pt_3:{
    paddingTop:3
  },
  pt_4:{
    paddingTop:4
  },
  pt_5:{
    paddingTop:5
  },
  pt_6: {
    paddingTop: 6,
  },
  pt_7: {
    paddingTop: 7,
  },
  pt_9: {
    paddingTop: 9,
  },
  pt_10: {
    paddingTop: 10,
  },
  pt_8: {
    paddingTop: 8,
  },
  pt_12: {
    paddingTop: 12,
  },
  pb_1:{
    paddingBottom:1
  },
  pb_2:{
    paddingBottom:2
  },
  pb_3:{
    paddingBottom:3
  },
  pb_4:{
    paddingBottom:4
  },
  pb_5:{
    paddingBottom:5
  },
  py_5: {
    paddingVertical: 5,
  },
  py_6: {
    paddingVertical: 6,
  },
  py_7: {
    paddingVertical: 7,
  },
  py_9: {
    paddingVertical: 9,
  },
  py_10: {
    paddingVertical: 10,
  },
  py_8: {
    paddingVertical: 8,
  },
  py_12: {
    paddingVertical: 12,
  },
  px_md: {
    paddingHorizontal: theme.spacing.md,
  },
  px_lg: {
    paddingHorizontal: theme.spacing.lg,
  },
  px_1: {
    paddingHorizontal: 1,
  },
  px_2: {
    paddingHorizontal: 2,
  },
  px_3: {
    paddingHorizontal: 3,
  },
  px_4: {
    paddingHorizontal: 4,
  },
  px_5: {
    paddingHorizontal: 5,
  },
  px_6: {
    paddingHorizontal: 6,
  },
  px_7: {
    paddingHorizontal: 7,
  },
  px_8: {
    paddingHorizontal: 8,
  },
  px_9: {
    paddingHorizontal: 1,
  },
  border_b_1: {
    borderBottomWidth: 1.5,
  },
  border_b_2: {
    borderBottomWidth: 2,
  },
  shadowMd: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  pxDefault: {
    paddingHorizontal: theme.spacing.xl,
  },
  flex1: {
    flex: 1,
  },
  lable: {
    color: theme.colors.grey2,
  },
  input: {
    borderColor: theme.colors.grey4,
    borderWidth: 1,
    fontSize: 15,
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 6,
    color: theme.mode === "dark" ? "white" : theme.colors.grey3,
  },
  bgDark: {
    backgroundColor: theme.colors.background,
  },
  headerStyles: {},
  gapYxl: {
    rowGap: theme.spacing.xl,
  },
  gapYlg: {
    rowGap: theme.spacing.lg,
  },
  gapYmd: {
    rowGap: theme.spacing.md,
  },
  gapYsm: {
    rowGap: theme.spacing.sm,
  },
  flex: {
    display: "flex",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  px_10: {
    paddingHorizontal: 10,
  },
  p_xl: {
    padding: theme.spacing.xl,
  },
  p_lg: {
    padding: theme.spacing.lg,
  },
  p_md: {
    padding: theme.spacing.md,
  },
  p_sm: {
    padding: theme.spacing.sm,
  },
  bgPrimary: {
    backgroundColor: theme.colors.primary,
  },
  round_6: {
    borderRadius: 6,
  },
  round_8: {
    borderRadius: 8,
  },
  bgGrayCustom: {
    backgroundColor: theme.mode === "light" ? "#EEF1F4" : theme.colors.grey5,
  },
  sX_5: {
    columnGap: 5,
  },
  flexWrap:{
    flexWrap:"wrap"
  },
  sX_7: {
    columnGap: 7,
  },
  sX_9: {
    columnGap: 9,
  },
  sX_10: {
    columnGap: 10,
  },
  sX_12: {
    columnGap: 12,
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent:"flex-end"
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  font_16: {
    fontSize: 16,
  },
  font_18: {
    fontSize: 18,
  },
  font_14: {
    fontSize: 14,
  },
  rowHeading: {
    fontSize: 18,
    fontWeight: "700",
  },
  bold7: {
    fontWeight: "700",
  },
  mt_10: {
    marginTop: 10,
  },
  mt_5: {
    marginTop: 5,
  },
  my_10:{
    marginVertical:10
  },
  pre_l_g_5: {
    backgroundColor: theme.colors.grey5,
  },
  border_c_primary:{
    borderColor:"#1877F2"
  },
}));

export default styles;