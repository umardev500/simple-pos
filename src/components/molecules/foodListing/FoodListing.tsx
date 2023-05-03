import { mdiFileEdit, mdiTrashCan } from '@mdi/js'
import Icon from '@mdi/react'
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
            <td className="py-1.5 whitespace-nowrap px-4 text-gray-600">
                <div className="flex items-center gap-6">
                    <img className="w-14 h-14 rounded-md" src={thumb} alt="thumb" />
                    {name}
                </div>
            </td>
            {/* <td className="py-1.5 px-4 ">
                <img className="w-14 h-14 rounded-md" src={thumb} alt="thumb" />
            </td> */}
            <td className="py-1.5 whitespace-nowrap px-4 text-gray-600 font-medium">Sep 23, 2023 15:15</td>
            <td className="py-1.5 whitespace-nowrap px-4 text-gray-600 font-medium ubuntu">IDR {price}</td>
            <td className="py-1.5 whitespace-nowrap px-4">
                <div className="flex gap-1">
                    <button className="bg-red-700 hover:bg-red-800 px-2 py-1.5 rounded-md text-white">
                        <Icon path={mdiTrashCan} size={'22px'} />
                    </button>
                    <button className="bg-sky-600 hover:bg-sky-700 px-2 py-1.5 rounded-md text-white">
                        <Icon path={mdiFileEdit} size={'22px'} />
                    </button>
                </div>
            </td>
        </tr>
    )
}
