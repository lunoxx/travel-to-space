import { React, useEffect, useState } from 'react';

import { crew } from '../../data';

const DestinationButtons = ({currentCrew, renderChanges}) => {
    
    // console.log('Destination buttons: ' + currentCrew);
    const [active, setActive] = useState(currentCrew);

    // Change dots nav when timer is triggered
    useEffect(() => {
        setActive(currentCrew);
    }, [currentCrew]);

    return (
      <>
          {crew.map((crewProps, index) => (
            <button 
                onClick={() => {
                    renderChanges(index); // render changes in pages/Crew.js
                    setActive(index); // set active here, to show dots active
                }}
                key={crewProps.name} 
                className = {active === index ? ("dots-nav-item active") : ("dots-nav-item")}
                >
            </button>
          ))}
      </>
    );

};

export default DestinationButtons;
