import React, { FC, memo, MouseEventHandler, useRef } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { IconButton, Stack } from '@mui/material'
import { ICar } from '../../../store/auth'
import {
  BoxList,
  MainElText,
  StackElIcon,
  StackElIcons,
  StackElText,
  SubElText,
} from './CarListStyle'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './CarList'

interface ICarListItem {
  id: string
  item: ICar
  moveCard: (id: string, to: number) => void
  findCard: (id: string) => { index: number }
  editCar: MouseEventHandler
}

interface Item {
  id: string
  originalIndex: number
}

const CarListItem: FC<ICarListItem> = ({ id, item, moveCard, findCard, editCar }) => {
  const originalIndex = findCard(id).index
  const carItemRef = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CAR,
      item: { id, originalIndex },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(droppedId, originalIndex)
        }
      },
    }),
    [id, originalIndex, moveCard],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CAR,
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id)
          moveCard(draggedId, overIndex)
        }
      },
    }),
    [findCard, moveCard],
  )

  const opacity = isDragging ? 0 : 1
  drag(drop(carItemRef))

  return (
    <BoxList p={2} mt={2} mb={2} ref={carItemRef} sx={{ opacity: opacity }}>
      <Stack gap={3.4} direction="row">
        <StackElIcon>
          <DragIndicatorIcon />
          <StackElText>
            <MainElText>{item.model}</MainElText>
            <MainElText>{item.year}</MainElText>
          </StackElText>
        </StackElIcon>
        <StackElText>
          <SubElText>Capacity Engine: {item.capaciteEngine}</SubElText>
          <SubElText>Reg. Venchle Number: {item.regVihicleNumber}</SubElText>
        </StackElText>
        <StackElText>
          <SubElText>Technical passport number: {item.technicalPassNumber}</SubElText>
          <SubElText>Vin number: {item.viaNumber}</SubElText>
        </StackElText>
        <StackElIcons>
          <IconButton aria-label="delete" size="small" onClick={editCar}>
            <ModeEditIcon />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon />
          </IconButton>
        </StackElIcons>
      </Stack>
    </BoxList>
  )
}

export default memo(CarListItem)
