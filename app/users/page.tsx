import React from 'react'

interface Users {
    id: number,
    name: string
}

const Users = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 10 }
    })
    const data: Users[] = await res.json()
    return (
        <div className='p-5'>
            <h1 className='p-3 font-bold underline'>Users List</h1>
            <ul>
                {data.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default Users