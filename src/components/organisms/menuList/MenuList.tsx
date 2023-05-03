import React from 'react'
import { Link, useMatch } from 'react-router-dom'

export const MenuList: React.FC = () => {
    const activeClasses = 'text-sky-600 border-sky-600'
    const isRoot = useMatch('/') !== null
    const isFoods = useMatch('/foods') !== null

    return (
        <nav className="flex items-stretch gap-6">
            <Link to="/foods" className={`${isFoods ? activeClasses : 'border-b-white'} px-4 flex items-center text-gray-500 font-medium border-b-2 hover:text-gray-600`}>
                Food
            </Link>
            <Link to="/" className={`${isRoot ? activeClasses : 'border-b-white'} px-4 flex items-center text-gray-500 font-medium border-b-2`}>
                Transaction
            </Link>
        </nav>
    )
}
