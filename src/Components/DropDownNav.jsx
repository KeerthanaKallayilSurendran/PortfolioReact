import React from 'react'

const DropDownNav = () => {
    return (
        <div className='flex flex-col dropdownnav shadow-lg'>
            <ul className='flex flex-col gap-4'>
                <li>Landing</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default DropDownNav