'use client'

import React, { useState } from 'react'
import AddArticles from './AddArticles';

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
            {tabs[0].id === activeTab ? <AddArticles /> : null}
            <div>{tabs.map((tab: any) => (
                <div key={tab.id} className={activeTab === tab.id ? '' : 'hidden'}>
                    {tab.content}
                </div>
            )) }</div>
        </div>
    )
}

export default TabsContent