import React from 'react'
import TestmoniCard from '@/app/customComp/Landing/TestmoniCard'

function Testmonials() {
    return (
        <section className='flexcolCenter space-y-6 border-8 mt-12 rounded-xl px-8 py-4 border-bluePrimary-600'>
            <span className='font-bold font-sans w-fit'>Testmonials</span>
            <div className='flexCenter gap-2'>
                <div className='space-y-2'>
                    <TestmoniCard name='Ashfaq salahudeen' about='Architect and enterprenuer' opinion='What an Masterpiece! using Easy plot
we minimize the errors of project handling
and get’s know lot of people in the industry' />
                    <TestmoniCard name='Ashfaq salahudeen' about='Architect and enterprenuer' opinion='What an Masterpiece! using Easy plot
we minimize the errors of project handling
and get’s know lot of people in the industry' />
                    <TestmoniCard name='Ashfaq salahudeen' about='Architect and enterprenuer' opinion='What an Masterpiece! using Easy plot
we minimize the errors of project handling
and get’s know lot of people in the industry' />
                </div>
                <div className='space-y-2'>
                    <TestmoniCard name='Ashfaq salahudeen' about='Architect and enterprenuer' opinion='What an Masterpiece! using Easy plot
we minimize the errors of project handling
and get’s know lot of people in the industry' />
                    <TestmoniCard name='Ashfaq salahudeen' about='Architect and enterprenuer' opinion='What an Masterpiece! using Easy plot
we minimize the errors of project handling
and get’s know lot of people in the industry' />
                    <TestmoniCard name='Ashfaq salahudeen' about='Architect and enterprenuer' opinion='What an Masterpiece! using Easy plot
we minimize the errors of project handling
and get’s know lot of people in the industry' />
                </div>
            </div>
        </section>
    )
}

export default Testmonials
