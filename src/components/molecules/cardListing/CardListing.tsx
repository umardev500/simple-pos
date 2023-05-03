import React from 'react'

export const CardListing: React.FC = () => {
    return (
        <div className="bg-white shadow-sm hover:shadow-lg shadow-gray-200 overflow-clip rounded-md cursor-pointer">
            <img src="assets/thumbs/AOV-icon.jpg" alt="thumb" />
            <div className="px-4 py-7 flex flex-col gap-0.5 items-center">
                <h3 className="font-medium text-base text-gray-600 roboto">Arena of Valor Game</h3>
                <div className="text-gray-500 text-lg font-semibold ubuntu">IDR 50.000</div>
            </div>
        </div>
    )
}
