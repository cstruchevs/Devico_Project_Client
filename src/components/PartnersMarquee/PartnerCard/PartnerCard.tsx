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
      <PartnerCardStyled sx={{backgroundImage: `url(${partnerImg})`}}/>
    </Tooltip>
  )
}

export default PartnerCard
