import { Dialog, DialogContent, Divider, Stack } from '@mui/material'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { uiActions } from '../../../store/ui-slice'
import { StyledDialogTitle, StyledTextField, StyledTypography } from '../../Auth/AuthStyles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AddCarCancelButton, AddCarConfirmButton, DialogActionsStyled } from './AddCarModalStyles'

interface IAddCarModal {}

const schema = yup.object().shape({
  fullName: yup.string().min(3),
  model: yup.string().min(4).required('Write model, min 4 characters'),
  year: yup
    .number()
    .min(1960)
    .positive()
    .required('Write year of the car, it must me greater than 1960'),
  capacityEngine: yup.string().min(2).required('Write capicicty engine'),
  regVehNumber: yup.string().min(4).required('Vehicle humber must contain at least 4 number'),
  techPassNumber: yup.number().min(1000).required('Tech pass must contain at least 4 number'),
  vinNumber: yup.number().min(1000).required('Vin number must contain at least 4 number'),
  driveTrain: yup.string().min(4).required('Drive train must contain at least 4 number'),
})

const AddCarModal: FC<IAddCarModal> = () => {
  const dispatch = useDispatch()
  const addCarIsShown = useSelector<RootState, boolean>(state => state.ui.showAddCar)
  const editCar = useSelector<RootState, boolean>(state => state.ui.editCar)

  const toggleAddCar = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
  }, [dispatch])

  const toggleAddCarCongrat = useCallback(() => {
    dispatch(uiActions.toggleCongratAddCar())
  }, [dispatch])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const onSubmitHandler = useCallback(
    (data: any) => {
      reset()
      toggleAddCarCongrat()
      toggleAddCar()
      console.log(data)
    },
    [reset, toggleAddCar, toggleAddCarCongrat],
  )

  return (
    <Dialog open={addCarIsShown} onClose={toggleAddCar}>
      <StyledDialogTitle>Add Car</StyledDialogTitle>
      <Divider />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <DialogContent>
          <Stack direction="row">
            <Stack direction="column">
              <StyledTypography>MODEL*</StyledTypography>
              <StyledTextField
                {...register('model')}
                error={Boolean(errors.model)}
                name="model"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <StyledTypography>YEAR*</StyledTypography>
              <StyledTextField
                {...register('year')}
                error={Boolean(errors.year)}
                name="year"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <StyledTypography>CAPACITY ENGINE*</StyledTypography>
              <StyledTextField
                {...register('capacityEngine')}
                error={Boolean(errors.capacityEngine)}
                name="capacityEngine"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <StyledTypography>REG. VEHICLE NUMBER*</StyledTypography>
              <StyledTextField
                {...register('regVehNumber')}
                error={Boolean(errors.regVehNumber)}
                name="regVehNumber"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Stack>
            <Stack direction="column">
              <StyledTypography>TECHNICAL PASSPORT NUMBER*</StyledTypography>
              <StyledTextField
                {...register('techPassNumber')}
                error={Boolean(errors.techPassNumber)}
                name="techPassNumber"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <StyledTypography>VIN NUMBER*</StyledTypography>
              <StyledTextField
                {...register('vinNumber')}
                error={Boolean(errors.vinNumber)}
                name="vinNumber"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <StyledTypography>DRIVE TRAIN*</StyledTypography>
              <StyledTextField
                {...register('driveTrain')}
                error={Boolean(errors.driveTrain)}
                name="driveTrain"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <StyledTypography>FULL NAME VEHICLE OWNER*</StyledTypography>
              <StyledTextField
                {...register('fullName')}
                error={Boolean(errors.fullName)}
                name="fullName"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActionsStyled>
          <AddCarCancelButton onClick={toggleAddCar}>Cancel</AddCarCancelButton>
          <AddCarConfirmButton type="submit">Subscribe</AddCarConfirmButton>
        </DialogActionsStyled>
      </form>
    </Dialog>
  )
}

export default memo(AddCarModal)
