import EventIcon from '@mui/icons-material/Event'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import WorkspacesIcon from '@mui/icons-material/Workspaces'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';


export const upSidebarLinks = [
    {
        icon: <EventIcon />,
        title: "Upcoming Events",
        link: "upcoming"
    },
    {
        icon: <CalendarMonthIcon />,
        title: "Events Calendar",
        link: "calendar"
    },
    {
        icon: <NewspaperIcon />,
        title: "News",
        link: "news"
    },
    {
        icon: <WorkspacesIcon />,
        title: "Partners",
        link: "partners"
    },
]

export const downSidebarLinks = [
    {
        icon: <BusinessOutlinedIcon />,
        title: "About us",
        link: "/about-us"
    },
    {
        icon: <QuestionAnswerOutlinedIcon />,
        title: "Contact us",
        link: "/contact-us"
    },
    {
        icon: <QuizOutlinedIcon />,
        title: "FAQ",
        link: "/faq"
    },
    {
        icon: <PolicyOutlinedIcon />,
        title: "Privacy & Term of use",
        link: "/policy"
    },
]