import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

const DashboardPage = async () => {
    const { userId } = auth()

    if (!userId) {
        return (
            <div>You are not logged in</div>
        )
    }

    const user = await currentUser()

    return (
        <div className='mt-10 text-start max-w-xl mx-auto text-black bg-neutral-200 p-5 rounded-sm'>
            <h1 className='text-4xl font-bold'>Welcome</h1>
            <ul className='list-none mt-10'>
                <li className='mb-2'><span className='font-semibold'>First Name:</span> {user?.firstName}</li>
                <li className='mb-2'><span className='font-semibold'>Last Name:</span> {user?.lastName}</li>
                <li className='mb-2'><span className='font-semibold'>Email:</span>{' '} {user?.emailAddresses[0].emailAddress}</li>
            </ul>
        </div>
    )
}

export default DashboardPage