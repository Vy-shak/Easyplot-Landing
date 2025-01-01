import React from 'react'
import { ReactNode } from 'react'
import { Navbar } from '@/app/customComp'

function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
}

export default layout