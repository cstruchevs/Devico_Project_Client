import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'
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
import {
  SortableList,
  SortableItemProps,
  ItemRenderProps,
} from '@thaddeusjiang/react-sortable-list'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../../store/ui-slice'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'

const CarList = () => {
  const dispatch = useDispatch()
  const cars:any = useSelector((state: RootState) => state.auth.cars)
  const [lolka, setLolka] = useState<SortableItemProps[]>([...cars])
  const toggleEditCar = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
    dispatch(uiActions.toggleEditCar())
  }, [dispatch])

  useEffect(()=> {
    setLolka([...cars])
    console.log(lolka)
  }, [cars]) 

  return (
    <SortableList
      items={lolka}
      setItems={setLolka}
      itemRender={({ item }: ItemRenderProps) => (
        <BoxList p={2} mt={2} mb={2}>
          <Stack gap={3.4} direction="row">
            <StackElIcon>
              <DragIndicatorIcon />
              <StackElText>
                <MainElText>{item.model}</MainElText>
                <MainElText>{item.year}</MainElText>
              </StackElText>
            </StackElIcon>
            <StackElText>
              <SubElText>{item.model}</SubElText>
              <SubElText>Reg. Venchle Number: {item.regVihicleNumber}</SubElText>
            </StackElText>
            <StackElText>
              <SubElText>Technical passport number: {item.technicalPassNumber}</SubElText>
              <SubElText>Vin number: {item.viaNumber}</SubElText>
            </StackElText>
            <StackElIcons>
              <IconButton aria-label="delete" size="small" onClick={() => {console.log('asda')}}>
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
