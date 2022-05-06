interface IColumn {
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

interface IData {
  start: string
  discipline: string
  status: string
  event: string
  location: string
}

const createData = (
  start: string,
  discipline: string,
  status: string,
  event: string,
  location: string,
): IData => {
  return { start, discipline, status, event, location }
}

export const allEventsRows = [
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
]
