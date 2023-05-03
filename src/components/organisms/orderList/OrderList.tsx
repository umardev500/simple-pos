import { OrderListing } from '@components/molecules'
import React from 'react'

export const OrderList: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-md shadow-md">
            <div className="flex flex-col gap-4">
                <OrderListing image="assets/thumbs/MobileLegend-icon.jpg" title="Mobile Legend" times={2} price="13.000" />
                <OrderListing image="assets/thumbs/FreeFire-icon.jpg" title="Free Fire" times={2} price="38.000" />
                <OrderListing image="assets/thumbs/COD-icon.jpg" title="Call of Duty" times={2} price="45.000" />
                <OrderListing image="assets/thumbs/MUOrigin-icon.jpg" title="MU Origin" times={2} price="29.000" />
            </div>

            <div className="mt-10">
                <button className="text-red-700 hover:bg-red-700 hover:border-red-700 hover:text-white px-4 py-2 rounded-md w-full font-medium border border-red-700">
                    Clear Cart
                </button>

                <div className="grid grid-cols-2 mt-4 gap-4">
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded-md text-white shadow-lg ubuntu">Save Bill</button>
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded-md text-white shadow-lg ubuntu">Print Bill</button>
                </div>
                <button className="w-full bg-sky-600 px-4 py-3 mt-4 rounded-md text-white font-semibold ubuntu">Charge IDR 80.000</button>
            </div>
        </div>
    )
}
