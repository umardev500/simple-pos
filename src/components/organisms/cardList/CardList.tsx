import { CardListing } from '@components/molecules'
import React from 'react'
import { OrderList } from '..'

export const CardList: React.FC = () => {
    return (
        <div className="px-4 mt-10">
            <div className="container grid grid-cols-6 gap-12 m-auto">
                <div className="grid col-span-6 xl:col-span-4 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
                    <CardListing />
                    <CardListing />
                    <CardListing />
                    <CardListing />
                    <CardListing />
                    <CardListing />
                </div>
                <div className="col-span-6 xl:col-span-2">
                    <OrderList />
                </div>
            </div>
        </div>
    )
}
