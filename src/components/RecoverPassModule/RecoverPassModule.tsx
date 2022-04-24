import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ConfirmStyledButton,
  StyledDialogTitle,
  StyledTextField,
  StyledTypography,
  StyledTypographyHandler,
} from "../Auth/AuthStyles";

const schema = yup.object().shape({
  email: yup.string().email().required("There is no account with this email"),
});

const RecoverPas = () => {
  const dispatch = useDispatch();
  const [isSend, setIsSend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const recoverIsShown = useSelector<RootState, boolean>(
    (state) => state.ui.showForgetPassword
  );

  const sendToggle = () => {
    setIsSend(!isSend);
  };

  const changeSignHandler = () => {
    dispatch(uiActions.toggleForgetPassword());
    dispatch(uiActions.toggleLog());
  };

  const toggleHandler = () => {
    reset();
    sendToggle();
    dispatch(uiActions.toggleForgetPassword());
  };

  const toggleHandlerCheck = () => {
    if (Boolean(errors.email)) return;

    if (recoverIsShown) dispatch(uiActions.toggleForgetPassword());
  };

  const onSubmitHandler = (data: object) => {
    console.log({ data });
    toggleHandlerCheck();
    reset();
  };
  return (
    <Dialog open={recoverIsShown} onClose={toggleHandler}>
      <StyledDialogTitle>Password Recover</StyledDialogTitle>
      <Divider />
      <DialogContent>
        {isSend ? (
          <>
            <DialogContentText>
              A password reset email has been sent to the email address on file
              for your account, but may take several minutes to show up in your
              inbox. Link valid 24h
            </DialogContentText>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ConfirmStyledButton onClick={toggleHandler}>
                Ok
              </ConfirmStyledButton>
            </Box>
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <StyledTypography>EMAIL*</StyledTypography>
            <StyledTextField
              {...register("email")}
              name="email"
              type="email"
              required
              fullWidth
              id="outlined-basic"
              variant="outlined"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <Box
              mt={1}
              pb={0}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ConfirmStyledButton type="submit" onClick={sendToggle}>
                Submit
              </ConfirmStyledButton>
            </Box>
          </form>
        )}
      </DialogContent>
      <DialogActions sx={{ margin: "auto", paddingTop: "0px" }}>
        <Typography sx={{ fontSize: "16px" }}>
          Already a member?{" "}
          <StyledTypographyHandler onClick={changeSignHandler}>
            Sign in
          </StyledTypographyHandler>
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default RecoverPas;
