import { Outlet } from "react-router-dom"

import BackToTopButton from "../Buttons/BackToTopButton"
import ScrollReset from "../Buttons/ScrollReset"

const Layout = () => (
    <>
        <ScrollReset />
        <BackToTopButton />

        <Outlet />
    </>
)

export default Layout