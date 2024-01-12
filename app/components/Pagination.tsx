import Link from 'next/link'
import React from 'react'

const fetchAll = async () => {
    const res = await fetch('https://api-trials.x5.com.au/api/articles')
    return res.json()
}

const Pagination = async (setPage: any) => {
    const allItem = await fetchAll()
    const { total } = allItem.data.page_info

    const perPage = 5
    const totalPage = Math.ceil(total / perPage)
    const pages = setPage
    let page = pages.setPage
    page = !page || page < 1 ? 1 : page
    const prevPage = page - 1 > 0 ? page - 1 : 1
    const nextPage = page + 1

    const pageNumbers = []
    const offsetNumber = 3
    for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
        if (i >= 1 && i <= totalPage) {
            pageNumbers.push(i)
        }
    }
    return (
        <div className='pt-4'>
            <nav aria-label="Page navigation example" className='flex justify-end'>
                <ul className="inline-flex -space-x-px text-sm">
                    <li>
                        {page === 1 ? (
                            <div aria-disabled="true" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</div>
                        ) : (
                            <Link href={`?page=${prevPage}`} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</Link>
                        )}
                    </li>
                    {pageNumbers.map((pageNumber, index) => {
                        return (
                            <li key={index}>
                                <Link href={`?page=${pageNumber}`} className={page === pageNumber ? "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-100 hover:bg-blue-200 hover:text-blue-700" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}>{pageNumber}</Link>
                            </li>
                        )
                    })}
                    <li>
                        {page === totalPage ? (
                            <div aria-disabled="true" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-1 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</div>
                        ) : (
                            <Link href={`?page=${nextPage}`} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-1 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination