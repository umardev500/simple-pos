import { mdiHeart } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export const Footer: React.FC = () => {
    return (
        <div className="container ml-auto mr-auto h-20 flex items-center justify-center">
            <div className="flex items-center text-gray-500 gap-2 text-sm">
                <span>&copy; 2023 Made by Umar built with</span>
                <Icon className="text-red-500" path={mdiHeart} size={'16px'} />
            </div>
        </div>
    )
}
