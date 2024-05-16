'use client'

import { useRouter } from 'next/navigation'
import React, { SyntheticEvent, useState } from 'react'

const AddArticles = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isMutating, setIsMutating] = useState(false)
    const router = useRouter()

    const addHandle = async (e: SyntheticEvent) => {
        e.preventDefault()

        setIsMutating(true)
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title, content
            })
        })
        setIsMutating(false)

        setTitle('')
        setContent('')
        router.refresh()
    }

    return (
        <div className='mt-3'>
            <form onSubmit={addHandle}>
                <div className='mb-5'>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="block lg:w-6/12 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mb-5'>
                    <label htmlFor="content" className='block mb-2 text-sm font-medium text-gray-900'>Content</label>
                    <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} className='block lg:w-6/12 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500'></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Save</button>
            </form>
        </div>
    )
}

export default AddArticles