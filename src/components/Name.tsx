import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Name() {
const session = await auth.api.getSession({
  headers: await headers(),
})

if(!session){
  return redirect('/sign-in')
}

const user = session?.user

  return (
    <div className='flex flex-col'>
      <span className='text-xs text-gray-400'>Witamy</span>
      <span className='text-sm font-bold'>{user?.name}</span>
    </div>
  )
}
