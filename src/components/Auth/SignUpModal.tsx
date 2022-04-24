import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { RootState } from "../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  StyledButton,
  StyledTypography,
  StyledTextField,
  ConfirmStyledButton,
  StyledTypographyHandler,
  StyledDialogTitle,
  StyledStackDescription,
} from "./AuthStyles";

const initialState = {
  email: "",
  password: "",
  phone: "",
  confirmPassword: "",
};

const phoneRegex: RegExp =
  /^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/;

const schema = yup.object().shape({
  email: yup.string().email().required("Write correct email"),
  password: yup.string().min(8).max(32).required("Write correct password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Auth = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (data: object) => {
    console.log({ data });

    dispatch(uiActions.toggleCongratAuth());
    reset();
    toggleHandler();
  };

  const [checked, setChecked] = useState(true);

  const regCartIsShown = useSelector<RootState, boolean>(
    (state) => state.ui.showReg
  );
  const logCartIsShown = useSelector<RootState, boolean>(
    (state) => state.ui.showLog
  );

  const toggleHandler = () => {
    if (
      Boolean(errors.email) ||
      Boolean(errors.password) ||
      Boolean(errors.confirmPassword)
    )
      return;
    reset();
    if (regCartIsShown) dispatch(uiActions.toggleReg());
  };

  const changeSignHandler = () => {
    dispatch(uiActions.toggleReg());
    dispatch(uiActions.toggleLog());
  };

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Dialog open={regCartIsShown} onClose={toggleHandler}>
        <StyledDialogTitle>Sign Up</StyledDialogTitle>
        <Divider />
        <Stack pt={2} direction="row" sx={{ margin: "auto" }}>
          <StyledButton variant="contained">CONNECT WITH FACEBOOK</StyledButton>
          <StyledButton variant="contained">CONNECT WITH GOOGLE</StyledButton>
        </Stack>
        <Divider sx={{ marginTop: "13px" }} variant="middle">
          OR
        </Divider>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Stack direction="row">
              <Stack direction="column" sx={{ margin: "auto" }}>
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
                />
                <StyledTypography>PASSWORD*</StyledTypography>
                <StyledTextField
                  {...register("password")}
                  name="password"
                  type="password"
                  required
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.password)}
                />
              </Stack>
              {regCartIsShown && (
                <Stack direction="column">
                  <StyledTypography>TELEPHONE</StyledTypography>
                  <StyledTextField
                    {...register("phone")}
                    name="phone"
                    id="outlined-basic"
                    variant="outlined"
                    error={Boolean(errors.phone)}
                  />
                  <StyledTypography>CONFIRM PASSWORD*</StyledTypography>
                  <StyledTextField
                    {...register("confirmPassword")}
                    id="outlined-basic"
                    variant="outlined"
                    name="confirmPassword"
                    required
                    error={Boolean(errors.confirmPassword)}
                  />
                </Stack>
              )}
            </Stack>
            <StyledStackDescription
              direction="row"
              sx={{
                marginTop: "15px",
                paddingLeft: "10px",
                alignItems: "center",
              }}
            >
              <Checkbox
                checked={checked}
                onChange={handleChangeCheckBox}
                inputProps={{ "aria-label": "controlled" }}
                sx={{ padding: "0" }}
              />
              <Typography sx={{ fontSize: "14px" }}>
                I agree to{" "}
                <Typography
                  sx={{ textDecoration: "underline", fontSize: "14px" }}
                  display="inline"
                >
                  Proccesing, use, dissemination and access to my personal data
                </Typography>
              </Typography>
            </StyledStackDescription>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ConfirmStyledButton
                type="submit"
                disabled={checked ? false : true}
                variant="outlined"
                onClick={toggleHandler}
                sx={{
                  margin: "auto",
                }}
              >
                Sign Up
              </ConfirmStyledButton>
            </Box>
          </form>
        </DialogContent>
        <DialogActions
          sx={{
            marginTop: "-20px ",
            paddingBottom: "20px",
            flexDirection: "column",
          }}
        >
          <Box mt={0.4}>
            <Typography sx={{ fontSize: "16px" }}>
              No account?{" "}
              <StyledTypographyHandler onClick={changeSignHandler}>
                Sign Up
              </StyledTypographyHandler>
            </Typography>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Auth;
