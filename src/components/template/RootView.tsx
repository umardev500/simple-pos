import { Header, Footer } from '@components/organisms'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const RootView: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between gap-2">
            <div>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
