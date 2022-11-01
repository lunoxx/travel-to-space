
import './../css/Hero.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className = "w-full container mx-auto xl:w-full xl:container xl:mx-auto relative">

         <div className = "hero-text-container py-11 pb-20 xl:pb-0 xl:py-56 text-white text-center xl:text-left">
              <h5 className = "leading-none">So, you want to travel to</h5>
              <h1 className="py-4">Space</h1>
              <p className = "w-full xl:w-4/12">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p>
         </div>

         <Link to = "/destination" className="explore-circle absolute -bottom-[14rem] left-0 right-0 mx-auto xl:bottom-40 xl:right-2 xl:mr-0 bg-white rounded-full flex items-center justify-center">
              <h5>Explore</h5>
         </Link>
    </section>
  )
}

export default Home;