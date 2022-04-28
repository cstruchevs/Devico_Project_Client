import { Button, Popover, styled } from "@mui/material";

export const StyledPopover = styled(Popover)({
    marginTop: "8.2px",
    marginLeft:"15px"
});

export const StyledButton = styled(Button)({
    color:'rgba(0, 0, 0, 0.56)',
    '&hover': {
        backgroundColor: "rgba(0, 0, 0, 0.08)"
    } 
});

