import { memo } from 'react';
import PartnersMarquee from '../../PartnersMarquee/PartnersMarquee';
import { SectionHeaderStyled, SectionWrappperStyled } from './PartnersSectionStyles';

const PatrnersSection = () => {
    return (
        <SectionWrappperStyled  component={'section'} id="partners">
            <SectionHeaderStyled variant='h4'>Partners</SectionHeaderStyled>
            <PartnersMarquee />
        </SectionWrappperStyled>
    );
};

export default memo(PatrnersSection);