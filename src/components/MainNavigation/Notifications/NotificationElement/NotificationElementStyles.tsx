import { Divider, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'

export const StyledNotificationElBox = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: 10,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '60px',
  borderRadius: '3px',
  marginTop: 5,
  marginBottom: 5,
}))

export const StyledTypoghraphyElBox = styled(Typography)(({ theme }) => ({
  marginRight: 'auto',
  fontSize: '15px',
}))

export const StyledTypoghraphyDateElBox = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  marginTop: 15
}))

export const StyledDividerElBox = styled(Divider)(({ theme }) => ({
  height: '2px',
  width: '95.5%',
  marginTop: '8px'
}))