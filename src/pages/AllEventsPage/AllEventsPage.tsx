import { Box } from '@mui/material';
import React from 'react';
import AllEvents from '../../components/AllEventsPageComponents/AllEvents';

const AllEventsPage = () => {
    return (
        <Box component={'section'}>
            <AllEvents />
        </Box>
    );
};

export default AllEventsPage;