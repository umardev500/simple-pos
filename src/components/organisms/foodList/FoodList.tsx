import { FoodListing } from '@components/molecules'
import React from 'react'

export const FoodList: React.FC = () => {
    return (
        <div className="mt-8 overflow-auto">
            <table className="w-full table food-table">
                <thead>
                    <tr className="text-gray-600 bg-gray-100">
                        <th className="py-4 px-4 w-20 font-medium text-center">#</th>
                        <th className="py-4 px-4 font-medium text-left">Name</th>
                        <th className="py-4 px-4 font-medium text-left">Photo</th>
                        <th className="py-4 px-4 xl:w-64 font-medium text-left">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <FoodListing num={1} name="Mobile Legend Balance" price="24.000" thumb="assets/thumbs/MobileLegend-icon.jpg" />
                </tbody>
            </table>
        </div>
    )
}
