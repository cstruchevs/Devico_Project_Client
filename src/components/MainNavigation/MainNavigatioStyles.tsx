import {
  AppBar,
  Box,
  Button,
  Divider,
  Popover,
  Stack,
  styled,
} from "@mui/material";

export const StyledPopover = styled(Popover)({
  marginTop: "10.1px",
  marginLeft: "15px",
});

export const StyledButton = styled(Button)({
  color: "rgba(0, 0, 0, 0.56)",
  "&hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
});

export const StyledMenuBoxNav = styled(Box)({
  height: "100%",
  background: "black",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: 1,
});

export const StyledInnerWarapperBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  height: "100%",
});

export const StyledAppBar = styled(AppBar)({
  background: "transparent",
  height: "43px",
  position: "sticky",
});

export const StyledAuthStackWrapper = styled(Stack)({
  flexDirection: "row",
  marginRight: "10px"
});

export const StyledAuthStack = styled(Stack)({
  flexDirection: "column",
  fontSize: "13px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledPopoverStack = styled(Stack)({
  "& button": {
    width: "135px",
    height: "40px",
    fontSize: "13px",
    borderRadius: "0px",
  },
});

export const StyledNotificationDivider = styled(Divider)({
  background: "#fff",
  height: "43px",
});
