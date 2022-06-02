import {
  HeaderCellStyled,
  PaginationPaperStyled,
  SectionHeaderStyled,
  SectionWrappperStyled,
  TableContainerStyled,
} from './AllEventsSectionStyles'
import React, { useCallback, useState, memo, FC, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Pagination } from '@mui/material'
import { allEventsColumns, createData, IData } from './AllEventsUtils'
import { v4 as uuidv4 } from 'uuid'
import { IEvents } from '../../../pages/WelcomePage/WelcomePage'

const ELEMENTS_PER_PAGE = 6

interface IAllEventsSection {
  events: IEvents[]
}
const AllEventsSection: FC<IAllEventsSection> = ({ events }) => {
  const [page, setPage] = useState(0)

  const cahngePageHandling = useCallback((event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage - 1)
  }, [])

  const [allEventsRows, setAllEventsRows] = useState<IData[]>([])

  useEffect(() => {
    setAllEventsRows(
      events.map((event: IEvents) => {
        const date = new Date(event.event.date)
        return createData(
          `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
          event.event.discipline,
          event.event.status,
          event.event.name,
          event.event.place,
        )
      }),
    )
  }, [events])

  return (
    <SectionWrappperStyled component={'section'}>
      <SectionHeaderStyled variant="h4">All events</SectionHeaderStyled>
      <TableContainerStyled>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              {allEventsColumns.map(column => (
                <HeaderCellStyled
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
                  }}
                >
                  {column.label}
                </HeaderCellStyled>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {allEventsRows
              .slice(page * ELEMENTS_PER_PAGE, page * ELEMENTS_PER_PAGE + ELEMENTS_PER_PAGE)
              .map(row => {
                return (
                  <TableRow hover tabIndex={0} key={uuidv4()}>
                    {allEventsColumns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainerStyled>
      <PaginationPaperStyled>
        <Pagination
          variant="outlined"
          shape="rounded"
          page={page + 1}
          count={Math.ceil(allEventsRows.length / ELEMENTS_PER_PAGE)}
          onChange={cahngePageHandling}
        />
      </PaginationPaperStyled>
    </SectionWrappperStyled>
  )
}

export default memo(AllEventsSection)
