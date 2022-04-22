import {
  Box,
  AppBar,
  Typography,
  Popover,
  Button,
  Stack,
  styled,
} from "@mui/material";
import { StyledPopover, StyledButton } from "./MainNavigatioStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

interface IMainNavigation {}

const MainNavigation = () => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleRegHandler = () => {
    dispatch(uiActions.toggleReg());
  };
  const toggleLoginHandler = () => {
    dispatch(uiActions.toggleLog());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            p={1}
            pr={0}
            sx={{
              background: "black",
              flexGrow: 0.02,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
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
                <StyledButton onClick={toggleRegHandler} size="medium">
                  Sign In
                </StyledButton>
                <StyledButton onClick={toggleLoginHandler} size="medium">
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
