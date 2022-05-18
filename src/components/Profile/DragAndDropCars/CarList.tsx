import { FC, memo, useState } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { IconButton, Stack } from '@mui/material'
import {
  BoxList,
  MainElText,
  StackElIcon,
  StackElIcons,
  StackElText,
  SubElText,
} from './CarListStyle'
import { DUMMY_DATA_CARS } from './CarListDummyData'
import {
  SortableList,
  SortableItemProps,
  ItemRenderProps,
} from '@thaddeusjiang/react-sortable-list'

interface ICarList {}

const CarList: FC<ICarList> = () => {
  const [carsList, setCarsList] = useState<SortableItemProps[]>([...DUMMY_DATA_CARS])

  return (
    <SortableList
      items={carsList}
      setItems={setCarsList}
      itemRender={({ item }: ItemRenderProps) => (
        <BoxList p={2} mt={2} mb={2}>
          <Stack gap={3.4} direction="row">
            <StackElIcon>
              <DragIndicatorIcon />
              <StackElText>
                <MainElText>{item.name}</MainElText>
                <MainElText>{item.year}</MainElText>
              </StackElText>
            </StackElIcon>
            <StackElText>
              <SubElText>{item.name}</SubElText>
              <SubElText>Reg. Venchle Number: {item.reg}</SubElText>
            </StackElText>
            <StackElText>
              <SubElText>Technical passport number: {item.techPass}</SubElText>
              <SubElText>Vin number: {item.vinNum}</SubElText>
            </StackElText>
            <StackElIcons>
              <IconButton aria-label="delete" size="small">
                <ModeEditIcon />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon />
              </IconButton>
            </StackElIcons>
          </Stack>
        </BoxList>
      )}
    />
  )
}

export default memo(CarList)
