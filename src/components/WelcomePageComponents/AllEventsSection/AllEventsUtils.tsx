export interface IColumn {
  id: 'start' | 'discipline' | 'status' | 'event' | 'location'
  label: string
  minWidth?: string
  align?: 'center' | 'right'
  format?: (value: number) => string
}

export const allEventsColumns: IColumn[] = [
  { id: 'start', label: 'Start', minWidth: '50px', align: 'center' },
  { id: 'discipline', label: 'Discipline', minWidth: '130px' },
  {
    id: 'status',
    label: 'Status',
    minWidth: '100px',
  },
  {
    id: 'event',
    label: 'Event',
    minWidth: '200px',
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: '170px',
  },
]

export interface IData {
  start: string
  discipline: string
  status: string
  event: string
  location: string
}

export const createData = (
  start: string,
  discipline: string,
  status: string,
  event: string,
  location: string,
): IData => {
  return { start, discipline, status, event, location }
}
