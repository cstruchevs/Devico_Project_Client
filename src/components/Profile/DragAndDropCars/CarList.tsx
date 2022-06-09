import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../../store/ui-slice'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import { ICar } from '../../../store/auth'

import { useDrop } from 'react-dnd'
import update from 'immutability-helper'
import CarListItem from './CarListItem'


export const ItemTypes = {
  CAR: 'car',
}

export const CarList: FC = memo(() => {
  const dispatch = useDispatch()
  const cars: ICar[] = useSelector((state: RootState) => state.auth.cars)
  const [carsList, setCarsList] = useState<ICar[]>([...cars])

  const toggleEditCar = useCallback(() => {
    dispatch(uiActions.toggleEditCar())
  }, [dispatch])


  const findCard = useCallback(
    (id: string) => {
      const car: ICar = carsList.filter(c => `${c.id}` === id)[0]
      return {
        car,
        index: carsList.indexOf(car),
      }
    },
    [carsList],
  )

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { car, index } = findCard(id)
      setCarsList(
        update(carsList, {
          $splice: [
            [index, 1],
            [atIndex, 0, car],
          ],
        }),
      )
    },
    [findCard, carsList, setCarsList],
  )

  const [, drop] = useDrop(() => ({ accept: ItemTypes.CAR }))

  useEffect(() => {
    setCarsList([...cars])
  }, [cars])

  return (
    <div ref={drop}>
      {carsList.map(car => (
        <CarListItem
          key={car.id}
          id={`${car.id}`}
          item={car}
          moveCard={moveCard}
          findCard={findCard}
          editCar={toggleEditCar}
        />
      ))}
    </div>
  )
})
