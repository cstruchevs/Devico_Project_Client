import { Stack } from '@mui/material'
import { styled } from '@mui/system'

export const StyledBoxNotification = styled(Stack)(({ theme }) => ({
    height: "80%",
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
}))
