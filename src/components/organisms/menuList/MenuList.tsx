import React from 'react'

export const MenuList: React.FC = () => {
    return (
        <nav className="flex items-stretch gap-6">
            <a href="#" className="px-4 flex items-center text-gray-500 font-medium hover:text-gray-600">
                Food
            </a>
            <a href="#" className="px-4 flex items-center text-sky-600 font-medium border-b-2 border-sky-600">
                Transaction
            </a>
        </nav>
    )
}
