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
    .min(8)
    .max(32)
    .required("Write the same password"),
  phone: yup.string().matches(phoneRegex, "Phone number is not valid"),
});

const Auth = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: initialState,
    resolver: yupResolver(schema),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (data: object) => {
    alert("ds");
    console.log({ data });
    reset();
  };

  const [checked, setChecked] = useState(true);

  const regCartIsShown = useSelector<RootState, boolean>(
    (state) => state.ui.showReg
  );
  const logCartIsShown = useSelector<RootState, boolean>(
    (state) => state.ui.showLog
  );

  const toggleHandler = () => {
    if (regCartIsShown) dispatch(uiActions.toggleReg());
    if (logCartIsShown) dispatch(uiActions.toggleLog());
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
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Dialog open={regCartIsShown || logCartIsShown} onClose={toggleHandler}>
          {regCartIsShown ? (
            <DialogTitle
              sx={{
                margin: "auto",
                fontWeight: "bold",
                fontSize: "26px",
                lineHeight: "30px",
              }}
            >
              Sign Up
            </DialogTitle>
          ) : (
            <DialogTitle
              sx={{
                margin: "auto",
                fontWeight: "bold",
                fontSize: "26px",
                lineHeight: "30px",
              }}
            >
              Sign In
            </DialogTitle>
          )}
          <Divider />
          <Stack pt={2} direction="row" sx={{ margin: "auto" }}>
            <StyledButton variant="contained">
              CONNECT WITH FACEBOOK
            </StyledButton>
            <StyledButton variant="contained">CONNECT WITH GOOGLE</StyledButton>
          </Stack>
          <Divider sx={{ marginTop: "13px" }} variant="middle">
            OR
          </Divider>
          <DialogContent>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Stack>
              {regCartIsShown && (
                <Stack direction="column">
                  <StyledTypography>TELEPHONE</StyledTypography>
                  <StyledTextField
                    {...register("phone")}
                    name="phone"
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <StyledTypography>CONFIRM PASSWORD*</StyledTypography>
                  <StyledTextField
                    id="outlined-basic"
                    variant="outlined"
                    {...register("confirmPassword")}
                    name="confirmPassword"
                    onChange={handleChange}
                    required
                  />
                </Stack>
              )}
            </Stack>
          </DialogContent>
          <DialogActions
            sx={{ paddingBottom: "20px", flexDirection: "column" }}
          >
            <Stack
              direction="row"
              sx={{
                marginRight: "auto",
                paddingLeft: "10px",
                alignItems: "center",
              }}
            >
              <Checkbox
                checked={checked}
                onChange={handleChangeCheckBox}
                inputProps={{ "aria-label": "controlled" }}
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
            </Stack>
            {regCartIsShown ? (
              <ConfirmStyledButton
                type="submit"
                disabled={checked ? false : true}
                variant="outlined"
                onClick={toggleHandler}
                sx={{
                  margin: "auto",
                  marginTop: "12px",
                  width: "80%",
                  backgroundColor: "#6A6968",
                  color: "#fff",
                  height: "39px",
                }}
              >
                Sign Up
              </ConfirmStyledButton>
            ) : (
              <ConfirmStyledButton
                type="submit"
                disabled={checked ? false : true}
                variant="outlined"
                onClick={toggleHandler}
                sx={{ margin: "auto" }}
              >
                Sign In
              </ConfirmStyledButton>
            )}
            <Box mt={2}>
              {regCartIsShown ? (
                <Typography sx={{ fontSize: "16px" }}>
                  Already a member?{" "}
                  <StyledTypographyHandler onClick={changeSignHandler}>
                    Sign in
                  </StyledTypographyHandler>
                </Typography>
              ) : (
                <Typography sx={{ fontSize: "16px" }}>
                  No account?{" "}
                  <StyledTypographyHandler onClick={changeSignHandler}>
                    Sign Up
                  </StyledTypographyHandler>
                </Typography>
              )}
            </Box>
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
};

export default Auth;
