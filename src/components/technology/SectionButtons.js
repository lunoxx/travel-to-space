import { React, useEffect, useState } from 'react';

import { technology } from '../../data';

const SectionButtons = ({currentSection, renderChanges}) => {


    const [active, setActive] = useState(currentSection);

    // Change dots nav when timer is triggered
    useEffect(() => {
        setActive(currentSection);
    }, [currentSection]);

    return (
        
        <>
            <div className='flex flex-row
            xl:flex-col w-fit section-buttons text-white'>
            {technology.map((technology, index) => (
                <button 
                    onClick={() => {
                        renderChanges(index); // render changes in pages/Technology.js
                        setActive(index); // set active here, to show dots active
                    }}
                    key={technology.name} 
                    className = {active === index ? ("active rounded-full border-white border-[1px] flex items-center justify-center") : ("rounded-full border-white border-[1px] flex items-center justify-center")} >
                    {index + 1}
                </button>
            ))}
            </div>
        </>
    )
};

export default SectionButtons;