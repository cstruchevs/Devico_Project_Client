import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'
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
  const [carsList, setCarsList] = useState<SortableItemProps[]>([...cars])

  const toggleEditCar = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
    dispatch(uiActions.toggleEditCar())
  }, [dispatch])

  useEffect(()=> {
    setCarsList([...cars])
  }, [cars]) 


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
              <IconButton aria-label="delete" size="small" onClick={toggleEditCar}>
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
