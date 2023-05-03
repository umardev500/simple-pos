import { CardListing } from '@components/molecules'
import React from 'react'

export const CardList: React.FC = () => {
    return (
        <div className="px-4 mt-10">
            <div className="container grid grid-cols-12 gap-12 m-auto">
                <div className="grid grid-cols-4 gap-7 col-span-9">
                    <CardListing />
                    <CardListing />
                    <CardListing />
                    <CardListing />
                    <CardListing />
                    <CardListing />
                </div>
                <div className="bg-green-300 col-span-3">Hello</div>
            </div>
        </div>
    )
}
