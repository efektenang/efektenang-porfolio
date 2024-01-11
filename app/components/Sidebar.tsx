import Link from 'next/link'
import React from 'react'
import { FiCodesandbox } from "react-icons/fi";
import { RxDashboard, RxGear, RxPerson } from "react-icons/rx"

const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='flex'>
                <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                        <Link href={'/'}>
                            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                                <FiCodesandbox size={30} />
                            </div>
                        </Link>
                        <span className="border-b-[1px] border-gray-200 w-full p-2 mb-1"></span>
                        <Link href={'/'} title='Dashboard'>
                            <div className="bg-gray-300 hover:bg-purple-800 text-black hover:text-white p-3 my-4 rounded-lg inline-block">
                                <RxDashboard size={30} />
                            </div>
                        </Link>
                        <Link href={'/articles'} title='Customers'>
                            <div className="bg-gray-300 hover:bg-purple-800 text-black hover:text-white p-3 my-4 rounded-lg inline-block">
                                <RxPerson size={30} />
                            </div>
                        </Link>
                        <Link href={'/'}>
                            <div className="bg-gray-300 hover:bg-purple-800 text-black hover:text-white p-3 my-4 rounded-lg inline-block">
                                <RxGear size={30} />
                            </div>
                        </Link>
                    </div>
                </div>
                <main className='ml-20 w-full'>{children}</main>
            </div>
        </>
    )
}

export default Sidebar  