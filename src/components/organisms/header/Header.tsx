import React from 'react'
import { BottomHeader } from './BottomHeader'
import { TopHeader } from './TopHeader'

export const Header: React.FC = () => {
    return (
        <header>
            <TopHeader />
            <BottomHeader />
        </header>
    )
}
