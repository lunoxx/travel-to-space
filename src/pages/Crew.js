
import './../css/pages/crew.css';

import { crew } from '../data';
import { useState, useEffect } from 'react';
import DotsNavigation from '../components/crew/DotsNavigation.js'

export default function Crew() {

     const TOTAL_CREWS = crew.length;
     let [crewID, setCrew] = useState(0); 

     useEffect(() => {

          const interval = setInterval(() => {

               crewID ++;
               if(crewID === TOTAL_CREWS) {
                    // eslint-disable-next-line
                    crewID = 0;
               }
               setCrew(crewID);

          }, 6000);

          return () => clearInterval(interval);
          
     }, [crewID]);

     const renderChanges = (childdata) => {
          setCrew(childdata);
     }

     return (
     <>
          <section className="container relative xl:flex mx-auto 
          xl:pb-32 xl:w-full xl:static xl:container xl:mx-auto">

               <div className = "crew text-center w-full xl:text-left">
                    <div className='mt-3 xl:mt-20 xl:text-2xl'>
                         <h5 className='text-center xl:text-left'>
                         <span>02</span>
                         MEET YOUR CREW
                         </h5>
                    </div>
               
                    <div className ="absolute top-[27rem] mx-auto w-full h-fit pb-24 text-white 
                    xl:static xl:pb-0 xl:top-0 xl:w-1/2 xl:flex xl:justify-between xl:items-start xl:h-[30rem] xl:flex-row xl:mt-20 xl:mx-0">
                         <div className='xl:mt-20'>
                              <h4 className='xl:my-4'>{crew[crewID].role}</h4>
                              <h3 className='xl:my-4'>{crew[crewID].name}</h3>
                              <p className='mx-auto left-0 right-0 w-10/12 mt-4 bio xl:mx-0 xl:mt-7 xl:w-3/5'>{crew[crewID].bio}</p>
                         </div> 
                         
                    </div>

                    <div className = "dots-nav absolute top-96 right-0 left-0 block xl:static">
                         <DotsNavigation currentCrew = {crewID}
                         renderChanges={renderChanges} />
                    </div>
               </div>
               
               {/* Crew image */}
               <div className="absolute top-20 left-0 right-0 mx-auto h-72 w-10/12 border-b-2 border-[#383B4B] overflow-hidden
               xl:border-0 xl:h-[40rem] xl:w-1/2 xl:top-auto xl:bottom-12 xl:left-auto xl:right-0">

                    <img src = {crew[crewID].images.webp} alt = "Destination" className="max-w-xs h-full w-auto ml-auto md:max-w-2xl xl:max-w-full mx-auto"></img>
               </div>
          </section>
          

     </>
     )
}
