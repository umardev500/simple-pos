import React from 'react'

interface Props {
    num: number
    name: string
    price: string
    thumb: string
}

export const FoodListing: React.FC<Props> = ({ num, name, price, thumb }) => {
    return (
        <tr className="">
            <td className="py-1.5 px-4 text-gray-600 text-center">{num}</td>
            <td className="py-1.5 px-4 text-gray-600">{name}</td>
            <td className="py-1.5 px-4 ">
                <img className="w-14 h-14 rounded-md" src={thumb} alt="thumb" />
            </td>
            <td className="py-1.5 px-4 text-gray-600 font-medium ubuntu">IDR {price}</td>
        </tr>
    )
}
