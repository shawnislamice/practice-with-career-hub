import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

import  notFound  from '../assets/notfound.jpg';
import { Link } from "react-router-dom";
const FeaturedJobCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div className="space-y-2 border p-3 py-6 shadow-md rounded-lg">
      <div>
        <img
          className="object-cover h-[40px] w-[116px]"
          src={logo || notFound}
          alt=""
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-[#474747] font-bold text-xl">{job_title}</h3>
        <p className="opacity-80">{company_name}</p>
        <div className="flex items-center space-x-4 ">
          <button className="btn btn-outline btn-info">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-info">{job_type}</button>
        </div>
        <div className="flex items-center gap-4 opacity-80">
          <div className="flex gap-2 items-center">
            <CiLocationOn size={20}></CiLocationOn>
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-2">
            <CiDollar size={20}></CiDollar>
            <p>Salary: {salary}</p>
          </div>
        </div>
        <Link to={`/jobs/${id}`} className="">
          <button className="btn my-3 text-white bg-gradient-to-r from-blue-400 to-purple-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
