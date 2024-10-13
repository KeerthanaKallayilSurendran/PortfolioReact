import React from 'react'

const DropDownSocila = () => {
    return (
        <div>
            <div className='flex flex-col dropdownsocial shadow-lg'>
                <ul className='flex flex-col gap-4'>
                    <li><i class='bx bxl-github'></i>GitHub</li>
                    <li><i class='bx bxl-linkedin' ></i>LinkedIn</li>
                    <li><i class='bx bxl-twitter' ></i>X/Twitter</li>
                </ul>
            </div>
        </div>
    )
}

export default DropDownSocila