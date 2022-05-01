import { Stack } from '@mui/material'
import { FC, memo, MouseEventHandler } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  WrapperStyled,
  DrawerStyled,
  MenuButtonStyled,
  MenuCloseButtonStyled,
  SidebarBoxStyled,
} from './MobileSidebarStyles'
import CloseIcon from '@mui/icons-material/Close'

interface IMobileSidebar {
  children?: JSX.Element | JSX.Element[]
  isDrawerOpen?: boolean
  onToggleDrawer: MouseEventHandler<HTMLButtonElement>
}

const MobileSidebarWrapper: FC<IMobileSidebar> = ({ children, isDrawerOpen, onToggleDrawer }) => {
  return (
    <WrapperStyled>
      <MenuButtonStyled onClick={onToggleDrawer} size="large">
        <MenuIcon />
      </MenuButtonStyled>

      <DrawerStyled anchor="left" open={isDrawerOpen} onClose={onToggleDrawer}>
        <Stack>
          <MenuCloseButtonStyled onClick={onToggleDrawer} size="large">
            <CloseIcon />
          </MenuCloseButtonStyled>
        </Stack>

        <SidebarBoxStyled>{children}</SidebarBoxStyled>
      </DrawerStyled>
    </WrapperStyled>
  )
}

export default memo(MobileSidebarWrapper)
