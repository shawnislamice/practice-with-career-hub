import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Statistics from "../pages/Statistics";
import AppliedJobs from "../pages/AppliedJobs";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import JobDetail from "../pages/JobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        index: true,
        element: <Home></Home>,
      },{
        path:'/jobs/:id',
        element:<JobDetail></JobDetail>,
        loader:()=>fetch('./jobs.json')
      }
    ],
  },
]);

export default router;
