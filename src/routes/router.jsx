import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Statistics from "../pages/Statistics";
import AppliedJobs from "../pages/AppliedJobs";
import Blogs from "../pages/Blogs";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/applied-jobs',
                element:<AppliedJobs></AppliedJobs>
            },{
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])

export default router