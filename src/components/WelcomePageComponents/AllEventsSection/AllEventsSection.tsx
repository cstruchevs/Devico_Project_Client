import { Pagination } from '@mui/material'
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import  { memo } from 'react'
import { useDemoData } from '@mui/x-data-grid-generator'
import { SectionHeaderStyled, SectionWrappperStyled, TableBoxStyled } from './AllEventsSectionStyles'


const CustomPagination = () => {
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

  return (
    <SectionWrappperStyled component={'section'}>
      <SectionHeaderStyled variant="h4">All events</SectionHeaderStyled>
      <TableBoxStyled>
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
      </TableBoxStyled>
    </SectionWrappperStyled>
  )
}

export default memo(AllEventsSection)
