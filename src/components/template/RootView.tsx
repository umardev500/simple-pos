import React from 'react'
import { Outlet } from 'react-router-dom'

export const RootView: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
