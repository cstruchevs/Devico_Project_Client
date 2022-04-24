import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { RootState } from "../../store";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import defaultImg from "../../assets/imgs/default.png";
import { ConfirmStyledButton } from "../Auth/AuthStyles";

const CongratModule = () => {
  const dispatch = useDispatch();

  const regCartIsShown = useSelector<RootState, boolean>(
    (state) => state.ui.congratAuth
  );

  const toggleHandler = (data: object) => {
    dispatch(uiActions.toggleAuth());
    dispatch(uiActions.toggleCongratAuth());
    
  };

  return (
    <Dialog open={regCartIsShown} onClose={toggleHandler}>
      <DialogTitle sx={{ width: "90%", margin: "auto" }}>
        <Box
          sx={{ width: "100%" }}
          component="img"
          alt="welcome"
          src={defaultImg}
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography sx={{ fontWeight: "bold" }}>Welcome!</Typography>
        </DialogContentText>
        <DialogContentText>
          You have successfully logged in to Kharkiv Racing.ua now you have
          access to your personal account
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ dislpay: "flex", justifyContent: "start" }}>
        <ConfirmStyledButton
          sx={{ width: "35%", marginRight: "auto" }}
          variant="contained"
          onClick={toggleHandler}
        >
          Cancel
        </ConfirmStyledButton>
      </DialogActions>
    </Dialog>
  );
};

export default CongratModule;
