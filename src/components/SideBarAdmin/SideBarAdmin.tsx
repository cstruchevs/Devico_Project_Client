import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BottomMenuStackStyled } from '../Sidebar/SidebarStyles'
import { LogoBoxStyled, TopMenuStackStyled, WrapperBoxStyled } from './SideBarAdminStyles'
import { upSidebarLinks, downSidebarLinks } from './SideBarAdminLinks'

interface ISidebarAdmin {}

const SideBarAdmin: FC<ISidebarAdmin> = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <WrapperBoxStyled>
      <LogoBoxStyled>
        <Typography variant="h6">LOGO</Typography>
      </LogoBoxStyled>
      <TopMenuStackStyled>
        <List>
          {upSidebarLinks.map((item, index) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <item.icon />
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </TopMenuStackStyled>
      <BottomMenuStackStyled>
        <List>
          {downSidebarLinks.map((item, index) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <item.icon />
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </BottomMenuStackStyled>
    </WrapperBoxStyled>
  )
}

export default SideBarAdmin
