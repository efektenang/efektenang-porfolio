import React from 'react'
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";

const fetchData = async () => {
    const res = await fetch('https://api-trials.x5.com.au/api/articles?search&page=1&page_size=5')
    return res.json()
}

const Customers = async () => {
    const getData = await fetchData()
    const { articles } = getData.data

    return (
        <div className='bg-gray mih-h-screen'>
            <div className="p-4">
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
                    <h2 className='font-bold mb-2'>Customers List</h2>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Content
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Options
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article: any) => (
                                    <tr key={article.id} className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {article.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {article.content}
                                        </td>
                                        <td className="px-6 py-4">
                                            {article.author.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {article.created_at}
                                        </td>
                                        <td className="pt-3 pb-1 ">
                                            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                                <FaRegTrashCan size={18} />
                                            </button>
                                            <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                                                <FaRegPenToSquare size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Customers