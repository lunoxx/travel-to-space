
import './../css/pages/destination.css';

import DestinationImage from '../components/destination/DestinationImage';
import DestinationButtons from '../components/destination/DestinationButtons';
// import DestinationOutlet from '../components/destination/DestinationOutlet';

//  Load data from json
import { destinations } from '../data';

import { useState } from 'react';

export default function Destination() {

  // Get response in this func, and use activeTab variable for image and texts change.
  const [activeTab, setTab] = useState("moon");

  const changeTab = (childdata) => {
    setTab(childdata);
  }

  // Get Tab Index
  let tabIndex = 0;
  destinations.map((item, i) => {
    if(item.name === activeTab) {
        tabIndex = i;
        return i;
    }
    return i;
  });

  return (
    <section className = "destination w-full container mx-auto xl:w-full xl:container xl:mx-auto relative">
        <div className='mt-3 xl:mt-20'>
          <h5 className='text-center xl:text-left'>
            <span>01</span>
            Pick Your Destination
          </h5>
        </div>

        <div className = 
        "w-full flex flex-col h-full justify-between items-start xl:h-[30rem] xl:flex-row xl:mt-20">

            {/* Image */}
            <div className = "flex h-auto mt-12 xl:mt-32 mx-auto xl:w-1/2 xl:m-20 xl:mr-0">
                <DestinationImage img = {activeTab} />
            </div>

            {/* Right Section */}
            <div className = "destination-info-panel flex w-full mx-auto h-fit flex-col justify-between text-white xl:h-full xl:mx-5 lg:w-2/4 2xl:w-1/3">
         
                {/* Buttons */}
                <div className = "mx-auto w-2/3 mt-12 nav-items flex flex-row justify-center gap-3 flex-wrap h-auto xl:justify-between top:0 xl:h-10 cursor-pointer xl:mt-0 xl:ml-1">

                    {/* send request to DestinationButtons for change-page and get response in changeTab func */}
                    <DestinationButtons changeTab={changeTab} />
                </div>

                {/* Section Title */}
                <div className = "mt-4 md:mt-6 mx-auto heroText uppercase xl:mt-0 xl:mx-1">{destinations[tabIndex].name}</div>

                {/* Description */}
                <p className = "flex text-center mt-3 md:mt-9 mb-12 xl:text-left xl:mt-0 xl:mb-0">{destinations[tabIndex].description}</p>

                {/* Footer */}
                <div className = "footer">
                  <div className = "line" />

                  <div className = "flex flex-col text-center align-center md:flex-row md:text-left w-full justify-evenly xl:w-2/3 xl:justify-between">
                    <div>
                      <div className = "title">Avg. Distance</div>
                      <div className = "uppercase text-[1.5rem]">{destinations[tabIndex].distance}</div>
                    </div>

                    <div>
                      <div className = "title">Est. travel time</div>
                      <div className = "uppercase text-[1.5rem]">{destinations[tabIndex].travel}</div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
    </section>
  )
}
