'use client'

import React from 'react'
import TestmoniCard from '@/app/customComp/Landing/TestmoniCard'
import { MessageSquareText } from "lucide-react"
import Profile1 from '../../../public/Images/TestminoiProfile/Profile1.jpg'
import Profile2 from '../../../public/Images/TestminoiProfile/Profile2.jpg'
import Profile3 from '../../../public/Images/TestminoiProfile/Profile3.jpg'
import Profile4 from '../../../public/Images/TestminoiProfile/Profile 4.jpg'
import Profile5 from '../../../public/Images/TestminoiProfile/Profile4.jpg'
import Profile6 from '../../../public/Images/TestminoiProfile/Profile 6.jpg'

const Row1 = [{
    id: 1,
    Username: 'Ashfaq Salahudeen',
    about: 'Architect and entrepreneur',
    opinion: "What a masterpiece! Using Easy Plot, we minimize errors in project handling and get to know a lot of people in the industry.",
    dp: Profile1
},
{
    id: 2,
    Username: 'Vyshak Krishna',
    about: 'Frontend developer and designer',
    opinion: "Easy Plot revolutionized how I approach my projects. Collaboration has never been smoother!",
    dp: Profile2
},
{
    id: 3,
    Username: 'Anika Sharma',
    about: 'Structural engineer',
    opinion: "A fantastic tool for professionals! It bridges the gap between architects and engineers seamlessly.",
    dp: Profile3
},]

const Row2 = [
    {
        id: 1,
        Username: 'Neha Kapoor',
        about: 'Urban planner',
        opinion: "Easy Plot has streamlined our planning processes. It's an indispensable tool for modern urban development.",
        dp: Profile4
    },
    {
        id: 2,
        Username: 'Rajesh Nair',
        about: 'Project manager',
        opinion: "This platform has significantly improved team communication and project efficiency. Highly recommended!",
        dp: Profile5
    },
    {
        id: 3,
        Username: 'Maya Singh',
        about: 'Interior designer',
        opinion: "I love how Easy Plot allows me to collaborate with architects and contractors effortlessly. It's a true lifesaver.",
        dp: Profile6
    }
];


function Testmonials() {
    return (
        <section className='flexcolCenter space-y-6 border-8 mt-12 rounded-xl px-8 py-4 border-bluePrimary-600'>
            <div className='flexCenter g-white border-2 w-fit border-stroke-500 p-2 rounded-full font-sans space-x-2 h-fit shadow-sm'>
                <MessageSquareText />
                <span className='font-bold b w-fit'>Testmonials</span>
            </div>
            <div className='flexCenter gap-2'>
                <div className='space-y-2'>
                    {Row1.map((item, index) => (
                        <TestmoniCard ProfileImg={item.dp} key={index} name={item.Username} about={item.about} opinion={item.opinion} />
                    ))}
                </div>
                <div className='space-y-2'>
                    {Row2.map((item, index) => (
                        <TestmoniCard ProfileImg={item.dp} key={index} name={item.Username} about={item.about} opinion={item.opinion} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testmonials
