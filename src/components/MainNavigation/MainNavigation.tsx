import {
  Box,
  AppBar,
  Typography,
  Popover,
  Button,
  Stack,
  styled,
  Divider,
} from "@mui/material";
import { StyledPopover, StyledButton } from "./MainNavigatioStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import React, { useState } from "react";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

interface IMainNavigation {}

const MainNavigation = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const isAuth = useSelector<RootState, boolean>(
    (state) => state.ui.isUserAuth
  );

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleRegHandler = () => {
    dispatch(uiActions.toggleReg());
  };
  const toggleLogHandler = () => {
    dispatch(uiActions.toggleLog());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", height: "7vh" }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", height: "100%" }}
        >
          <Box
            pr={1}
            pl={1}
            sx={{
              height: "100%",
              background: "black",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 1,
            }}
          >
            {isAuth && (
              <Stack direction="row" gap={1}>
                <NotificationsNoneOutlinedIcon sx={{ height: "7vh" }} />
                <Divider
                  orientation="vertical"
                  sx={{ background: "#fff", height: "7vh" }}
                />
                <Stack direction="column" sx={{fontSize:"13px", display:"flex", alignItems: "center", justifyContent:"center"}}>
                  <Typography sx={{fontSize:"13px"}}>
                    Welcome!{" "}
                  </Typography>
                  <Typography sx={{fontSize:"13px"}}>Semen Struchev</Typography>
                </Stack>
              </Stack>
            )}
            <AccountCircleIcon />
            <KeyboardArrowDownIcon
              aria-describedby={id}
              onClick={handleClick}
            />
            <StyledPopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Stack
                sx={{
                  "& button": {
                    p: 1.4,
                    pr: 9,
                    pl: 2,
                    fontSize: "13px",
                    borderRadius: "0px",
                  },
                }}
                direction="column"
              >
                <StyledButton onClick={toggleLogHandler} size="medium">
                  Sign In
                </StyledButton>
                <StyledButton onClick={toggleRegHandler} size="medium">
                  Sign Up
                </StyledButton>
              </Stack>
            </StyledPopover>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default MainNavigation;
