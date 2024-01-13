'use client'

import React, { useState } from 'react'
import { HiDocumentPlus } from "react-icons/hi2"

interface Tab {
    id: number;
    title: string;
    content: React.ReactNode;
  }
  
  interface TabsProps {
    tabs: Tab[];
  }

const TabsContent: React.FC<TabsProps> = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px">
                    {tabs.map((tab: any) => (
                        <li key={tab.id} className="me-2">
                            <a onClick={() => setActiveTab(tab.id)} className={activeTab === tab.id ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 cursor-pointer' : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 cursor-pointer'}>{ tab.title }</a>
                        </li>
                    ))}
                </ul>
            </div>
            {tabs[0].id === activeTab ?
            <div className='absolute sm:top-20 sm:right-6 top-16 right-14'>
            <button type="button" onClick={() => setActiveTab(2)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
                <HiDocumentPlus />
                <div className='pl-2'>Add New</div>
            </button>
        </div> : null}
            <div>{tabs.map((tab: any) => (
                <div key={tab.id} className={activeTab === tab.id ? '' : 'hidden'}>
                    {tab.content}
                </div>
            )) }</div>
        </div>
    )
}

export default TabsContent