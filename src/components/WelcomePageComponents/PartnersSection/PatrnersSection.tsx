import { Typography } from '@mui/material';
import React from 'react';
import PartnersMarquee from '../../PartnersMarquee/PartnersMarquee';
import { SectionWrappperStyled } from './PartnersSectionStyles';

const PatrnersSection = () => {
    return (
        <SectionWrappperStyled  component={'section'} id="partners">
            <Typography variant='h4'>Partners</Typography>
            <PartnersMarquee />
        </SectionWrappperStyled>
    );
};

export default PatrnersSection;