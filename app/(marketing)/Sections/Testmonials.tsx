import React from 'react'
import TestmoniCard from '@/app/customComp/Landing/TestmoniCard'
import { MessageSquareText } from "lucide-react"

const Row1 = [{
    id: 1,
    Username: 'Ashfaq Salahudeen',
    about: 'Architect and entrepreneur',
    opinion: "What a masterpiece! Using Easy Plot, we minimize errors in project handling and get to know a lot of people in the industry."
},
{
    id: 2,
    Username: 'Vyshak Krishna',
    about: 'Frontend developer and designer',
    opinion: "Easy Plot revolutionized how I approach my projects. Collaboration has never been smoother!"
},
{
    id: 3,
    Username: 'Anika Sharma',
    about: 'Structural engineer',
    opinion: "A fantastic tool for professionals! It bridges the gap between architects and engineers seamlessly."
},]

const Row2 = [
    {
        id: 1,
        Username: 'Neha Kapoor',
        about: 'Urban planner',
        opinion: "Easy Plot has streamlined our planning processes. It's an indispensable tool for modern urban development."
    },
    {
        id: 2,
        Username: 'Rajesh Nair',
        about: 'Project manager',
        opinion: "This platform has significantly improved team communication and project efficiency. Highly recommended!"
    },
    {
        id: 3,
        Username: 'Maya Singh',
        about: 'Interior designer',
        opinion: "I love how Easy Plot allows me to collaborate with architects and contractors effortlessly. It's a true lifesaver."
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
                    {Row1.map((item) => (
                        <TestmoniCard name={item.Username} about={item.about} opinion={item.opinion} />
                    ))}
                </div>
                <div className='space-y-2'>
                    {Row2.map((item) => (
                        <TestmoniCard name={item.Username} about={item.about} opinion={item.opinion} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testmonials
