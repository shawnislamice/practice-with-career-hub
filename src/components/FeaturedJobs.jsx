import { useEffect, useState } from "react";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJobs = () => {
    const [featuredJobs,setFeaturedJobs]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setFeaturedJobs(data))
    },[])
    return (
      <div className="md:my-10">
        <div>
          
          <h1 className="text-3xl text-center font-bold">Featured Jobs</h1>
          <p className="text-center opacity-80 py-3">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {
                featuredJobs.map((job,index)=><FeaturedJobCard job={job} key={index}></FeaturedJobCard>)
            }
        </div>
      </div>
    );
};

export default FeaturedJobs;