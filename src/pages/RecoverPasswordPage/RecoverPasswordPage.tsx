import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'
import RecoverPassForm from '../../components/RecoverPass/RecoverPassForm'
import { StyledBox } from './RecoverPasswordPageStyles'

const RecoverPasswordPage = () => {
  const { id, token } = useParams<{id?: string, token?: string}>()
  return (
    <StyledBox>
      <RecoverPassForm id={id} token={token}/>
    </StyledBox>
  )
}

export default RecoverPasswordPage
