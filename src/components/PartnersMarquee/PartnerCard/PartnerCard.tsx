import { Tooltip, Zoom } from '@mui/material'
import { FC } from 'react'
import { PartnerCardStyled } from './PartnerCardStyled'

export interface PartnerCardProps {
  partnerImg?: string
  partnerName?: string
}

const PartnerCard: FC<PartnerCardProps> = ({ partnerImg, partnerName }) => {
  return (
    <Tooltip title={`${partnerName}`} TransitionComponent={Zoom} arrow>
      <PartnerCardStyled>
        <img src={partnerImg} width="200px" height="110px" alt="Partner Logo" />
      </PartnerCardStyled>
    </Tooltip>
  )
}

export default PartnerCard
