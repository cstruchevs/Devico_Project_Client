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
import { sagaActions } from '../../../store/sagaActions'

interface IAddCarModal {}

const schema = yup.object().shape({
  fullNameOwner: yup.string().min(3),
  model: yup.string().min(4).required('Write model, min 4 characters'),
  year: yup
    .string()
    .min(4)
    .required('Write year of the car, it must me greater than 1960'),
  capaciteEngine: yup.string().min(2).required('Write capicicty engine'),
  regVihicleNumber: yup.string().min(4).required('Vehicle humber must contain at least 4 number'),
  technicalPassNumber: yup.string().min(4).required('Tech pass must contain at least 4 number'),
  viaNumber: yup.string().min(5).required('Vin number must contain at least 4 number'),
  driveTrain: yup.string().min(4).required('Drive train must contain at least 4 number'),
})

const AddCarModal: FC<IAddCarModal> = () => {
  const dispatch = useDispatch()
  const id: any = useSelector((state: RootState) => state.auth.user?.id)
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
      dispatch({ type: sagaActions.ADD_CAR_SAGA, payload: { ...data, id: id } })
      reset()
      toggleAddCarCongrat()
      toggleAddCar()
      console.log(data)
    },
    [reset, toggleAddCar, toggleAddCarCongrat, dispatch],
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
                {...register('capaciteEngine')}
                error={Boolean(errors.capaciteEngine)}
                name="capaciteEngine"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <StyledTypography>REG. VEHICLE NUMBER*</StyledTypography>
              <StyledTextField
                {...register('regVihicleNumber')}
                error={Boolean(errors.regVihicleNumber)}
                name="regVihicleNumber"
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
                {...register('technicalPassNumber')}
                error={Boolean(errors.technicalPassNumber)}
                name="technicalPassNumber"
                type="text"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <StyledTypography>VIN NUMBER*</StyledTypography>
              <StyledTextField
                {...register('viaNumber')}
                error={Boolean(errors.viaNumber)}
                name="viaNumber"
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
                {...register('fullNameOwner')}
                error={Boolean(errors.fullNameOwner)}
                name="fullNameOwner"
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
