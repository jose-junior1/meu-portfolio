import { createBrowserRouter } from "react-router-dom"

import Layout from "./components/Layout"
import HomePage from "./pages/Home"
import ProjectsPage from "./pages/Projects"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/projects',
                element: <ProjectsPage />
            },
        ],
    }
])

export default router