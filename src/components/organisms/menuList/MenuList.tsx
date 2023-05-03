import React from 'react'
import { Link } from 'react-router-dom'

export const MenuList: React.FC = () => {
    return (
        <nav className="flex items-stretch gap-6">
            <Link to="/foods" className="px-4 flex items-center text-gray-500 font-medium hover:text-gray-600">
                Food
            </Link>
            <Link to="/" className="px-4 flex items-center text-sky-600 font-medium border-b-2 border-sky-600">
                Transaction
            </Link>
        </nav>
    )
}
