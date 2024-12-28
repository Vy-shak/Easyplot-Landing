import React from 'react'

function InfoCard() {
    return (
        <div className="bg-blue-100 p-2 rounded-lg border border-blue-200 max-w-lg mx-3 ">
            <p className="text-gray-800 text-[16px] font-Montserrat font-medium">
                The number your are seeing above every sheet will be followed on each sheet
            </p>
            <p className="text-gray-800 text-[16px] font-Montserrat font-medium ">
                Drag and drop to Re-arrange the sheets
            </p>
        </div>
    )
}

export default InfoCard
