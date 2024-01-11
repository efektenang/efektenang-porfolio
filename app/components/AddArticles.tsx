import React from 'react'
import { HiDocumentPlus } from "react-icons/hi2"

const AddArticles = () => {
    return (
        <div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
                <HiDocumentPlus />
                <div className='pl-2'>Add New</div>
            </button>
        </div>
    )
}

export default AddArticles