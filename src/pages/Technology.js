
import './../css/Technology.css';
import { React, useEffect, useState, useRef } from 'react';
import { technology } from '../data';
import SectionButtons from '../components/technology/SectionButtons'

import useWindowDimensions from '../components/customFunc/getWindowDimensions.js';

export default function Technology() {

     // THis ref will be connected to the image box
     const boxRef = useRef();

     // Get height of hero image and place the section below the image, at a distance of 40px 
     const getPosition = () => {

          const heroImage_height = boxRef.current.offsetHeight;
          const heroImage_offsetTop = boxRef.current.offsetTop;

          document.getElementById("info-panel").style.top = heroImage_height + heroImage_offsetTop + 40 + "px";

          // console.log("height: " + boxRef.current.offsetHeight + " top: " +  boxRef.current.offsetTop);
     };

     const TOTAL_SECTIONS = technology.length;
     let [sectionID, setSection] = useState(0); 

     const {width} = useWindowDimensions();

     useEffect(() => {
          
          window.addEventListener("resize", getPosition);
          
          const interval = setInterval(() => {

               sectionID ++;
               if(sectionID === TOTAL_SECTIONS) {
                    // eslint-disable-next-line
                    sectionID = 0;
               }
               setSection(sectionID);

          }, 6000);

          return () => {
               clearInterval(interval);
               window.removeEventListener("resize", getPosition);
          }

     }, [sectionID]);

     const renderChanges = (childdata) => {
          setSection(childdata);
     }

     return (
          
          <section className="container relative xl:flex mx-auto 
          xl:pb-32 xl:w-full xl:static xl:container xl:mx-auto">

               <div className = "crew text-center w-full xl:text-left">
                    <div className='mt-3 xl:mt-20 xl:text-2xl'>
                         <h5 className='text-center xl:text-left'>
                         <span>03</span>
                         SPACE LAUNCH 101
                         </h5>

                    </div>
               
                    <div id = "info-panel" className ="absolute  mx-auto w-full h-fit pb-24 text-white
                    xl:static xl:pb-0 xl:top-0 xl:w-1/2 xl:flex xl:justify-between xl:items-start xl:h-[30rem] xl:flex-row xl:mt-20 xl:mx-0">

                         <div className='flex flex-col items-center
                         xl:items-start xl:flex-row xl:align-left xl:mt-20'>
                              <SectionButtons 
                                   currentSection = {sectionID}
                                   renderChanges={renderChanges} 
                              />

                              <div className='xl:ml-20'>
                                   <h6>THE TERMINOLOGY…</h6>
                                   <h3>{technology[sectionID].name}</h3>
                                   <p className='mx-auto left-0 right-0 w-10/12 mt-4 description xl:mx-0 xl:mt-7 xl:w-10/12'>{technology[sectionID].description}</p>
                              </div>
                         </div>
                    </div>

                    <div className = "dots-nav absolute top-96 right-0 left-0 block xl:static">
                    </div>
               </div>
               
               {/* Technology image */}
               <div ref={boxRef} className="absolute top-20 left-0 right-0 mx-auto h-fit w-full overflow-hidden
                    xl:h-[40rem] xl:w-1/2 xl:top-auto xl:bottom-80 xl:left-auto xl:right-0">
                    
                    {width >= 1280
                         // desktop, laptop:
                         ? <img onLoad = {getPosition} src = {technology[sectionID].images.portrait} alt = "Destination" className="max-w-xs h-full w-auto md:max-w-2xl xl:max-w-full mx-auto xl:ml-auto xl:mr-0"></img>
                         
                         // phone, tablet:
                         : <img onLoad = {getPosition} src = {technology[sectionID].images.landscape} alt = "Destination" className="w-full h-auto xl:max-w-full mx-auto xl:ml-auto xl:mr-0"></img>
                    }
               </div>
          </section>
     )
}
