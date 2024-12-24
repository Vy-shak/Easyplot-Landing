import React from 'react'

function InfoCard() {
    return (
        <div
            className="flex flex-col justify-start items-start w-full rounded-lg bg-[#ccd9ff]"
        >
            <div
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[3px]"
            >
                <p
                    className="self-stretch flex-grow-0  w-full font font-medium text-left text-[#002652]"
                >
                    <span
                        className="self-stretch  flex-grow-0 flex-shrink-0 w-full  font-medium text-left text-[#002652]"
                    >The number your are seeing above every sheet will be followed on</span
                    ><br /><span
                        className="self-stretch flex-grow-0 flex-shrink-0 w-[375px]  font-medium text-left text-[#002652]"
                    >each sheet</span>
                </p>
                <p
                    className="self-stretch flex-grow-0 flex-shrink-0 w-full  font-medium text-left text-[#002652]"
                >
                    Drag and drop to Re-arrange the sheets
                </p>
            </div>
        </div>
    )
}

export default InfoCard
