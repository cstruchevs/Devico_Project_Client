import { Divider, FormControlLabel, Stack, styled } from '@mui/material'
import { FileUploader } from 'react-drag-drop-files'

export const MainStackForm = styled(Stack)({
  width: '100%',
})

export const StackLicenseForm = styled(Stack)({
    height: "500px",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "start"
  })

export const FileUploaderStyled = styled(FileUploader)({
  width: '100%',
  height: '300px',
})

export const FormControlLabelStyled = styled(FormControlLabel)({
})

export const DividerCard = styled(Divider)({
  marginTop: '4px',
  marginBottom: '4px',
})


export const DividerPayments = styled(Divider)({
    marginTop: '4px',
    marginBottom: '12px',
  })

export const StackCard = styled(Stack)({
    flexDirection: 'row',
    justifyContent: "space-between"
  })
  
