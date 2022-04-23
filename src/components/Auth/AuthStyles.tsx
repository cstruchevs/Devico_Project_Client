import { Button, styled, TextField, Typography } from "@mui/material";

export const StyledButton = styled(Button)({
  margin: "10px",
  height: "50px",
  borderRadius: "0px",
});

export const ConfirmStyledButton = styled(Button)({
  margin: "auto",
  marginTop: "12px",
  width: "80%",
  backgroundColor: "#6A6968",
  color: "#fff",
  height: "39px",
  border: '1px solid black',
  '&:hover': {
    backgroundColor: "#6A6968",
    color: "black",
    border: '1px solid black', 
  },
  '&:disabled': {
    color: "#d7d2d2"
  }
});

export const StyledTypography = styled(Typography)({
  paddingLeft: "10px",
  letterSpacing: "2px",
  fontSize: "13px"
});

export const StyledTextField = styled(TextField)({
  padding: "4px 10px 10px 10px",
  borderRadius: "0px",
  " fieldSet": {
    borderRadius: "0px",
  },
  " input": {
    height: "5px",
  },
});

export const StyledTypographyHandler = styled(Typography)({
    display:"inline",
    textDecoration: "underline",
    '&:hover': {
        cursor: "pointer"
    }
  });