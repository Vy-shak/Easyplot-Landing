import React from 'react'


interface Boxes {
    length: string,
    box1: string,
    box2: string,
    box3: string
}

function Boxes({ length, box1, box2, box3 }: Boxes) {
    return (
        <div className={`flexBetween ${length} space-x-1 h-2`}>
            <div className={`${box1} bg-bluePrimary-400 h-full rounded-full`}>

            </div>
            <div className={`${box2} bg-bluePrimary-400 h-full rounded-full`}>

            </div>
            <div className={`${box3} bg-bluePrimary-400 h-full rounded-full`}>

            </div>
        </div>
    )
}

export default Boxes
