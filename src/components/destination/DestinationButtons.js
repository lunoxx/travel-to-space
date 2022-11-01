import { React, useState } from 'react';

const destinations = ["moon", "mars", "europa", "titan"];

const DestinationButtons = ({changeTab}) => {
    
    const [active, setActive] = useState(destinations[0]);


    return (
      <>
          {destinations.map((type) => (
            <button 
                onClick={() => {
                    changeTab(type);
                    setActive(type);
                }}
                key={type} 
                className = {`${active === type ? "active" : ""} btn margin-0 uppercase `}
                >
                  
                {type}
            </button>
          ))}
      </>
    );

};

export default DestinationButtons;
