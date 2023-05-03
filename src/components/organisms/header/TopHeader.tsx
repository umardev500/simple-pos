import React from 'react'

export const TopHeader: React.FC = () => {
    return (
        <div className="bg-white px-4 h-16 flex items-start border-b">
            <div className="container flex items-center gap-4 m-auto cursor-pointer">
                <img className="w-11 h-11" src="assets/icons/salad.png" alt="" />
                <h3 className="font-semibold text-gray-600">Umar Resto</h3>
            </div>
        </div>
    )
}
