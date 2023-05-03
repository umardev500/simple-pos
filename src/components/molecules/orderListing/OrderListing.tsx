import React from 'react'

interface Props {
    title: string
    times: number
    price: string
    image: string
}

export const OrderListing: React.FC<Props> = ({ title, times, price, image }) => {
    return (
        <div className="flex flex-wrap items-center cursor-pointer gap-4 border-b pb-4">
            <img className="w-20 h-16 rounded-md" src={image} alt="thumbs" />
            <div className="flex flex-wrap gap-0.5 flex-1 justify-between">
                <h3 className="text-gray-600 font-medium">{title}</h3>
                <div className="flex items-center gap-6">
                    <span className="text-gray-500 text-sm">X{times}</span>
                    <span className="text-sky-500 font-semibold ubuntu">Rp {price}</span>
                </div>
            </div>
        </div>
    )
}
