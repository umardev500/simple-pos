import { FoodList } from '@components/organisms'
import { Pagination } from '@components/organisms/pagination'
import React from 'react'
import { Link } from 'react-router-dom'

export const Food: React.FC = () => {
    return (
        <div className="container m-auto mt-10 p-6 rounded-md shadow-sm shadow-gray-300 bg-white">
            <Link to="/" className="mt-1 inline-flex bg-sky-600 hover:bg-sky-700 text-white font-medium px-4 py-2 rounded-md">
                Add new food
            </Link>
            <div>
                <FoodList />
                <div className="py-4 flex mt-6 justify-center xl:justify-end px-8">
                    <Pagination pageCount={4} />
                </div>
            </div>
        </div>
    )
}
