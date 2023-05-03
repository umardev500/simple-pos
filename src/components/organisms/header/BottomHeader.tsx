import React from 'react'
import { MenuList } from '..'

export const BottomHeader: React.FC = () => {
    return (
        <div className="bg-white h-14 px-4 shadow-md">
            <div className="container flex h-full m-auto">
                <MenuList />
            </div>
        </div>
    )
}
