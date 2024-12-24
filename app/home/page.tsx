"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Navbar, DottedBackground, Alertbox } from '../customComp/index';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const uploadRef = useRef(null);
    const router = useRouter();
    const [alert, setAlert] = useState(false)

    const Uploadsheets = () => {
        //@ts-ignore   //genrics
        uploadRef.current?.click();
    };

    const uploadfinsh = async () => {
        //@ts-ignore
        const files = uploadRef.current.files;
        if (files && files.length >= 2) {
            router.push('/merge')
        } else {
            setAlert(true)
        }
    }

    return (
        <section className='w-full flexcolCenter'>
            <DottedBackground />
            <div className='flex flex-col flexCenter w-fit z-10 mt-28'>
                <h1 className='text-bluePrimary-700 mb-4 font-semibold text-4xl'>Merge your sheets without worries</h1>
                <p className='text-gray-600 mb-6 text-sm text-center w-fit'><span>Combine the sheets  in the order and respective sheet number with</span><br />
                    <span>most efficent product out there</span></p>
                <div onClick={Uploadsheets} className='w-fit h-fit'>
                    <Button size={'lg'} variant={'epPrimary'}>Select your sheets</Button>
                    <input onChange={uploadfinsh} multiple ref={uploadRef} type='file' className='hidden' />
                </div>
                {alert && <Alertbox />}
            </div>
        </section>
    )
}
