import React from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
    pageCount: number
}

export const Pagination = React.memo(({ pageCount }: Props) => {
    const handlePageChange = () => {
        console.log('changed')
    }
    return (
        <ReactPaginate
            onPageChange={handlePageChange}
            className="react-paginate"
            breakLabel="..."
            nextLabel="Next"
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={undefined}
            activeClassName="active"
        />
    )
})

Pagination.displayName = 'Pagination'
