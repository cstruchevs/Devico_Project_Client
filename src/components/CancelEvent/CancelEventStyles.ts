import { styled, TextareaAutosize } from '@mui/material'

export const TextareaAutosizeStyled = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  marginTop: '10px',
  marginBottom: '10px',
  resize: "vertical",
}))
