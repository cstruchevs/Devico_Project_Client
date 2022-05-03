import { Pagination, Typography } from '@mui/material'
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import React from 'react'
import { useDemoData } from '@mui/x-data-grid-generator'
import { SectionWrappperStyled } from './AllEventsSectionStyles'
import { Box } from '@mui/system'

function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      variant="outlined"
      shape="rounded"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

const AllEventsSection = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 11,
  })

  console.log(data)

  return (
    <SectionWrappperStyled component={'section'}>
      <Typography variant="h4">All events</Typography>
      <Box sx={{ minHeight: 400, width: '100%' }}>
        <DataGrid
          pagination
          pageSize={6}
          rowsPerPageOptions={[5]}
          components={{
            Pagination: CustomPagination,
          }}
          autoHeight={true}
          {...data}
        />
      </Box>
    </SectionWrappperStyled>
  )
}

export default AllEventsSection
