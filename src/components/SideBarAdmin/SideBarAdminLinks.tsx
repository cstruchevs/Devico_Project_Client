import NewspaperIcon from '@mui/icons-material/Newspaper'
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const upSidebarLinks = [
    {
        icon: NewspaperIcon,
        title: "News",
        link: "/news"
    },
    {
        icon: EventAvailableIcon,
        title: "Events",
        link: "/events"
    },
    {
        icon: ContactMailIcon,
        title: "Issuance of licenses",
        link: "/licenses"
    },
    {
        icon: GroupIcon,
        title: "List of the users",
        link: "/events"
    },
    {
        icon: AdminPanelSettingsIcon,
        title: "List of the admins",
        link: "/events"
    },
]

export const downSidebarLinks = [
    {
        icon: LockIcon ,
        title: "Change Password",
    },
    {
        icon: LogoutIcon,
        title: "Sign Out",
    },
]