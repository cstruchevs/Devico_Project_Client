import { Paper, Popper, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { PartnerCardStyled } from "./PartnerCardStyled";

export interface PartnerCardProps {
  partnerImg?: string;
  partnerName?: string;
}

const PartnerCard: FC<PartnerCardProps> = ({ partnerImg, partnerName }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleEnter = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  }, []);

  const handleLeave = useCallback(() => {
    setAnchorEl(null);
    setOpen((previousOpen) => !previousOpen);
  }, []);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <PartnerCardStyled onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <img src={partnerImg} width="200px" height="110px" alt="Partner Logo" />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper>
          <Typography sx={{ p: 2 }}>{partnerName}</Typography>
        </Paper>
      </Popper>
    </PartnerCardStyled>
  );
};

export default PartnerCard;
