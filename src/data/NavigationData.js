import { FaHome } from "react-icons/fa";
import { BiDetail, BiSolidContact} from "react-icons/bi"
import {MdHomeRepairService} from "react-icons/md"


export const NavigationData = [
    {
        id: 1,
        label: "Home",
        path: "/",
        icon: FaHome
    },
    {
        id: 2,
        label: "About",
        path: "/about",
        icon: BiDetail
    },
    {
        id: 3,
        label: "Services",
        path: "/services",
        icon: MdHomeRepairService
    },
    {
        id: 4,
        label: "Contact",
        path: "/contact",
        icon: BiSolidContact
    }
]