import { styled, Container, MobileStepper } from "@mui/material";

export const ContainerSectionStyled = styled(Container)(({ theme }) => ({
  margin: "auto",
  padding: "0px",
}));

export const ContainerSlideStyled = styled(Container)(({ theme }) => ({
  backgroundColor: "transparent",
  width: "100%",
  padding: "0px !important",
}));

export const MobileStepperStyled = styled(MobileStepper)(({ theme }) => ({
  padding: "0px",
  marginTop: "1em",
  flexGrow: 1,
  "& .MuiLinearProgress-root": {
    width: "100%",
    height: "3px",
  },
}));
