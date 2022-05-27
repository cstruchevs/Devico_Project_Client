interface IColumn {
  id: 'number' | 'fullName' | 'venchleClass'
  label: string
  minWidth?: string
  align?: 'center' | 'right'
  format?: (value: number) => string
}

export const allPartisipantsColumns: IColumn[] = [
  { id: 'number', label: 'Number', minWidth: '40px', align: 'center' },
  { id: 'fullName', label: 'Full name', minWidth: '120px' },
  {
    id: 'venchleClass',
    label: 'Venchle class',
    minWidth: '120px',
  },
]

interface IData {
  number: string
  fullName: string
  venchleClass: string
}

const createData = (number: string, fullName: string, venchleClass: string): IData => {
  return { number, fullName, venchleClass }
}

export const allPartisipantsRows = [
  createData('23', 'Dmitry Novikov', 'Honda Civic'),
  createData('23', 'Glovko Maksim', 'BMW X5'),
  createData('23', 'Voloh Sergei', 'Lanos'),
  createData('23', 'Pertik Oleksandr', 'Porche 911'),
  createData('23', 'Dmitry Novikov', 'Honda Civic'),
  createData('23', 'Glovko Maksim', 'BMW X5'),
  createData('23', 'Voloh Sergei', 'Lanos'),
  createData('23', 'Pertik Oleksandr', 'Porche 911'),
  createData('23', 'Dmitry Novikov', 'Honda Civic'),
  createData('23', 'Glovko Maksim', 'BMW X5'),
  createData('23', 'Voloh Sergei', 'Lanos'),
  createData('23', 'Pertik Oleksandr', 'Porche 911'),
]
