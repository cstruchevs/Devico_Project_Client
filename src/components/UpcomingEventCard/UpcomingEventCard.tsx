import {
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import {
  AdressStyled,
  CardContentStyled,
  DateStyled,
  InfoStyled,
  LinkStyled,
  NextEventPaper,
  TitleStyled,
  UpcomingEventCardStyled,
} from "./UpcomingEventCardStyles";

interface UpcomingEventCardProps {
  title?: string;
  date?: string;
  address?: string;
  backgroundImage?: string;
  discipline?: string;
  status?: string;
  series?: string;
  eventUrl?: string;
}

const UpcomingEventCard: FC<UpcomingEventCardProps> = ({
  title,
  date,
  address,
  backgroundImage,
  discipline,
  status,
  series,
  eventUrl,
}) => {
  return (
    <UpcomingEventCardStyled>
      <CardContentStyled>
        <Stack direction="column">
          <NextEventPaper elevation={0}>
            <Typography variant="h6">Next Event</Typography>
          </NextEventPaper>
          <TitleStyled variant="h4">{title}</TitleStyled>
          <Stack direction="row" alignItems="baseline">
            <DateStyled>{date}</DateStyled>
            <AdressStyled>{address}</AdressStyled>
          </Stack>
        </Stack>
        <Stack direction="column">
          <InfoStyled variant="body1">Dicscipline: {discipline}</InfoStyled>
          <InfoStyled variant="body1">Status: {status}</InfoStyled>
          <InfoStyled variant="body1">Series: {series}</InfoStyled>
        </Stack>
      </CardContentStyled>
      <Stack direction="row" justifyContent="space-between" sx={{paddingBlock:"20px"}}>
        <LinkStyled
          href={eventUrl}
          underline="hover"
          sx={{ paddingBottom: "10px", paddingTop: "10px" }}
          rel="noreferrer"
        >
          View details
        </LinkStyled>
        <Button sx={{ width: "160px", paddingBlock: "0px" }} variant="contained">
          Register
        </Button>
      </Stack>
    </UpcomingEventCardStyled>
  );
};

export default UpcomingEventCard;
