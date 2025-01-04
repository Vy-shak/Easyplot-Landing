import React from 'react';
import { NavbarL } from '@/app/customComp';

function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className='w-full scroll-smooth focus:scroll-auto" flex-col box-border overflow-clip justify-center itemslg:px-16'>
            <NavbarL />
            {children}
        </section>
    )
}

export default layout