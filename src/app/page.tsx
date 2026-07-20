import { ModeToggle } from '@/components/ui/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div>Page</div>
      <ModeToggle/>
      <UserButton/>
    </div>
  )
}

export default Page