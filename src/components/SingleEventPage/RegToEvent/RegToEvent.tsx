import {
  Dialog,
  DialogTitle,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Typography,
  TextField,
} from '@mui/material'
import { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import callApi from '../../../services/callApi'
import { RootState } from '../../../store'
import { IDriversData } from '../../../store/auth'
import { uiActions } from '../../../store/ui-slice'
import { DialogContentTextStyled, WrapperBoxStyled } from './RegToEventStyles'

interface IReagToEvent {}

const RegToEvent: FC<IReagToEvent> = () => {
  const dispatch = useDispatch()
  const isShowRegEvent: boolean = useSelector((state: RootState) => state.ui.eventRegister)
  const cars = useSelector((state: RootState) => state.auth.cars)
  const driversData = useSelector<RootState, IDriversData | null>(state => state.auth.driversData)
  const user = useSelector((state: RootState) => state.auth.user)
  const [car, setCar] = useState<string>('')
  const [vehicleClass, setVehicleClass] = useState<string>('')
  const [partNumber, setPartNumber] = useState<string>('')
  let location = useLocation()

  const carChangeHandler = (event: SelectChangeEvent) => {
    setCar(event.target.value as string)
  }

  const vehicleChangeHandler = (event: SelectChangeEvent) => {
    setVehicleClass(event.target.value as string)
  }

  const partNumberChangeHandler = (event: any) => {
    setPartNumber(event.target.value)
  }

  const handleClose = () => {
    dispatch(uiActions.toggleEventRegister())
  }

  const regToEventHandler = async () => {
    const data = await callApi.post('events/reg', {
      id: user?.id,
      eventId: location.pathname.match(/\d+/)![0],
      carId: car,
      vehicleClass: vehicleClass,
      desiredPartNumber: partNumber,
    })
    console.log(data.data)
    handleClose()
  }

  return (
    <Dialog open={isShowRegEvent} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>Apply for event</DialogTitle>
      <Divider />
      <WrapperBoxStyled>
        <Stack direction="row" gap="10px">
          <FormControl fullWidth>
            <InputLabel id="selected-car-label">Select car*</InputLabel>
            <Select
              labelId="selected-car-label"
              value={car}
              label="Select car*"
              onChange={carChangeHandler}
            >
              {cars.map(car => (
                <MenuItem value={car.id}>{car.model}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="selected-venchle-label">Venchle class*</InputLabel>
            <Select
              labelId="selected-venchle-label"
              value={vehicleClass}
              label="Venchle class*"
              onChange={vehicleChangeHandler}
            >
              <MenuItem value={'Class 1'}>Class 1</MenuItem>
              <MenuItem value={'Class 2'}>Class 2</MenuItem>
              <MenuItem value={'Class 3'}>Class 3</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Divider />
        <Typography variant="subtitle1">DRIVERS DATA</Typography>
        <Stack direction="row" gap="10px">
          <Stack direction="column" gap="10px">
            <DialogContentTextStyled>
              <b>Full name: </b>
              {driversData?.nickname}
            </DialogContentTextStyled>
            <DialogContentTextStyled>
              <b>DOB: </b>
              {new Date().toISOString()}
            </DialogContentTextStyled>
            <DialogContentTextStyled>
              <b>Driver license number: </b>
              {driversData?.driverLicense}
            </DialogContentTextStyled>
            <DialogContentTextStyled>
              <b>Cell number: </b>
              {driversData?.phone}
            </DialogContentTextStyled>
            <DialogContentTextStyled>
              <b>ID number: </b>
              {driversData?.idNumber}
            </DialogContentTextStyled>
          </Stack>
          <Stack direction="column" gap="10px">
            <DialogContentTextStyled>
              <b>City: </b>
              {driversData?.city}
            </DialogContentTextStyled>
            <DialogContentTextStyled>
              <b>Reg. Adress: </b>
              {driversData?.regAdress}
            </DialogContentTextStyled>
            <DialogContentTextStyled>
              <b>Full name of your representative: </b>
              {driversData?.representiveFullName}
            </DialogContentTextStyled>
            <DialogContentTextStyled>
              <b>Representative license number: </b>
              {driversData?.representiveLicense}
            </DialogContentTextStyled>
            <DialogContentTextStyled>
              <b>Sport Driver License Number: </b>
              {driversData?.sportDriverLicense}
            </DialogContentTextStyled>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="column" gap="10px">
          <Typography variant="subtitle1">DESIRED PARTICIPANTION NUMBER*</Typography>
          <TextField
            type="number"
            sx={{ width: '70px' }}
            value={partNumber}
            onChange={partNumberChangeHandler}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <Button onClick={regToEventHandler} variant="contained" sx={{ width: '100%' }}>
          Submit
        </Button>
      </WrapperBoxStyled>
    </Dialog>
  )
}

export default RegToEvent
