import { getJobs } from "../utilities/LocalStorage";
import AppliedJobCard from "../components/AppliedJobCard";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const AppliedJobs = () => {
  const [filter, setFilter] = useState("All");
  const appliedJobs = getJobs();
  const [jobs, setJobs] = useState(appliedJobs);

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
    if (filterValue == "All") {
      setJobs(appliedJobs);
    } else {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite == filterValue
      );
      setJobs(remoteJobs);
    }
  };

  return (
    <div>
      <h2 className="text-center font-extrabold text-3xl md:my-10">
        Applied Jobs
      </h2>
      <div className="dropdown  dropdown-bottom dropdown-end  flex md:justify-end justify-center my-3">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-base-300 m-1 flex items-center  ">
          Filter By
          <FaAngleDown className="ml-2" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a onClick={() => handleFilter("All")}>ALL</a>
          </li>
          <li>
            <a onClick={() => handleFilter("Remote")}>Remote</a>
          </li>
          <li>
            <a onClick={() => handleFilter("Onsite")}>Onsite</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        {jobs.map((job, index) => (
          <AppliedJobCard job={job} key={index}></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
