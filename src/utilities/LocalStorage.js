import toast from "react-hot-toast";

export const getJobs = () => {
  let jobs = [];
  const presentJobs = localStorage.getItem("jobs");
  if (presentJobs) {
    jobs = JSON.parse(presentJobs);
  }
  return jobs;
};

export const setJobs = (jobItem) => {
  const jobs = getJobs();
  const isExist = jobs.find((job) => job.id == jobItem.id);
  if (isExist) {
    toast.error("Already Applied for the job");
  } else {
    jobs.push(jobItem);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    toast.success("Succesfully Applied for this job");
  }
};
