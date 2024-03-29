import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { setJobs } from "../utilities/LocalStorage";
const JobDetail = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const job = jobs.find((jobItem) => jobItem.id == id);

  const {
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
const handleApplyNow = (jobItem) => {
  
  setJobs(jobItem)
};
  return (
    <div className="text-[#1A1919] ">
      <h1 className="text-center text-3xl font-extrabold md:py-20 py-5">
        Job Details{" "}
      </h1>
      <div className="flex justify-between ">
        <div className="md:w-[60%] space-y-4 opacity-80">
          <p>
            <b>Job Description: </b>
            {job_description}
          </p>
          <p>
            <b>Job Responsibilty: </b>
            {job_responsibility}
          </p>
          <p>
            <b>Educational Requirements: </b>
            {educational_requirements}
          </p>
          <p>
            <b>Experiences: </b>
            {experiences}
          </p>
        </div>
        <div>
          <div className=" space-y-5 p-7 bg-sky-200 rounded-lg ">
            <h3 className="font-extrabold">Job Details</h3>
            <hr className="" />
            <div className="flex gap-2 items-center  opacity-80">
              <CiDollar size={20}></CiDollar>
              <p>
                <b>Salary:</b>
                {salary}(Per Month)
              </p>
            </div>
            <div className="flex gap-2 items-center opacity-80">
              <SlCalender size={20}></SlCalender>
              <p>
                <b>Job Title:</b>
                {job_title}
              </p>
            </div>

            <h3 className="font-extrabold">Contact Information</h3>
            <hr className="" />
            <div className="flex  gap-2 items-center opacity-80">
              <CiPhone size={20}></CiPhone>
              <p>
                <b>Phone:</b> {contact_information.phone}
              </p>
            </div>
            <div className="flex gap-2 items-center opacity-80">
              <MdOutlineEmail size={20}></MdOutlineEmail>
              <p>
                <b>Email:</b> {contact_information.email}
              </p>
            </div>
            <div className="flex gap-2 items-center opacity-80">
              <CiLocationOn size={20}></CiLocationOn>
              <p>
                <b>Address:</b> {contact_information.address}
              </p>
            </div>
          </div>
          <Link onClick={() => handleApplyNow(job)}>
            <button className="bg-gradient-to-r from-blue-400 to-purple-600 btn w-full md:mt-4 text-white">
              Apply Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default JobDetail;
