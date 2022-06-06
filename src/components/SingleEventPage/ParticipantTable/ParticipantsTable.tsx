import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { FC, memo, useMemo } from 'react'
import { HeaderCellStyled } from './ParticipantsModalStyles'
import { IRow } from './PartisipantsModal'

interface IColumn {
  id: 'number' | 'fullName' | 'carModel'
  label: string
  minWidth?: string
  align?: 'center' | 'right'
}

interface IParticipantsTableContent {
  users: IRow[]
}

const ParticipantsTable: FC<IParticipantsTableContent> = ({ users }) => {
  const allParticipantsColumns: IColumn[] = useMemo(
    () => [
      { id: 'number', label: 'Number', minWidth: '40px', align: 'center' },
      { id: 'fullName', label: 'Full name', minWidth: '120px' },
      { id: 'carModel', label: 'Car Model', minWidth: '120px' },
    ],
    [],
  )

  return (
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {allParticipantsColumns.map(column => (
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
        {users.map((row: IRow, index: number) => (
            <TableRow hover tabIndex={0} key={index}>
              {allParticipantsColumns.map(column => (
                <TableCell key={`${column.id}_${row[column.id]}`} align={column.align}>
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default memo(ParticipantsTable)
