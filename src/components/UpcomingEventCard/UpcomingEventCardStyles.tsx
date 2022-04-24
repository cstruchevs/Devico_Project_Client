import { styled, Paper, Card, Typography, CardContent, Link } from "@mui/material";
import BgImage from "../../assets/imgs/Bitmap.png";

export const UpcomingEventCardStyled = styled(Card)(({ theme }) => ({
  margin: "auto",
  marginInline: "15px",
  paddingInline: "40px",
  paddingBlock: "20px",
  marginTop: "50px",
  minHeight: "500px",
  backgroundImage: "url(" + BgImage + ")",
  backgroundSize: "cover",
  display: "flex",
  flexFlow: "column",
}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: "0px",
  flexGrow: "1",
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between",
  paddingBottom: "30px",
  borderBottomColor: theme.palette.primary.dark,
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
}));

export const NextEventPaper = styled(Paper)(({ theme }) => ({
  maxWidth: "180px",
  margin: "20px 0px 30px 0px",
  padding: "8px",
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  fontWeight: "bold",
}));

export const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

export const DateStyled = styled(Typography)(({ theme }) => ({
  marginTop: "10px",
  fontWeight: "bold",
  fontSize: "20px",
}));

export const AdressStyled = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  marginLeft: "10px",
}));

export const InfoStyled = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.dark,
    "&:hover": {
        cursor: "pointer",
    }
  }));