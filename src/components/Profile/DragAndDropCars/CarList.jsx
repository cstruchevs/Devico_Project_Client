import { FC, memo, useRef, useState } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { v4 as uuidv4 } from 'uuid'
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

const CarList = () => {
  const draggingItem = useRef()
  const dragOverItem = useRef()

  const [list, setList] = useState(DUMMY_DATA_CARS)

  const handleDragStart = (e, position) => {
    draggingItem.current = position
    console.log(e.target.innerHTML)
  }

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position
    console.log(e.target.innerHTML)
    const listCopy = [...list]
    console.log(draggingItem.current, dragOverItem.current)
    const draggingItemContent = listCopy[draggingItem.current]
    listCopy.splice(draggingItem.current, 1)
    listCopy.splice(dragOverItem.current, 0, draggingItemContent)

    draggingItem.current = dragOverItem.current
    dragOverItem.current = null
    setList(listCopy)
  }

  console.log(DUMMY_DATA_CARS)
  return (
    <>
        {list &&
          list.map((el, index) => (
            <BoxList
              p={2}
              mt={2}
              mb={2}
              key={uuidv4()}
              onDragStart={e => handleDragStart(e, index)}
              onDragOver={e => e.preventDefault()}
              onDragEnter={e => handleDragEnter(e, index)}
              draggable
            >
              <Stack gap={3.4} direction="row">
                <StackElIcon>
                  <DragIndicatorIcon />
                  <StackElText>
                    <MainElText>{el.name}</MainElText>
                    <MainElText>{el.year}</MainElText>
                  </StackElText>
                </StackElIcon>
                <StackElText>
                  <SubElText>{el.name}</SubElText>
                  <SubElText>Reg. Venchle Number: {el.reg}</SubElText>
                </StackElText>
                <StackElText>
                  <SubElText>Technical passport number: {el.techPass}</SubElText>
                  <SubElText>Vin number: {el.vinNum}</SubElText>
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
          ))}
    </>
  )
}

export default memo(CarList)
