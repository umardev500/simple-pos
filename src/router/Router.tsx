import { Food, Home } from '@components/pages'
import { RootView } from '@components/template'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootView />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/foods',
                element: <Food />,
            },
        ],
    },
])
