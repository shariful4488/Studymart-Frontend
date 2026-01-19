import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";
import TopPartners from "../components/TopPartners";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout/>,
        children:[
            {
                path:"", element:<Home/>
            },
            {
                path:"top-partners", element:<TopPartners/>
            },
        ]
    },

    // // Auth Routes
    {
        path:"/auth",
        element:<Authlayout/>,
        children:[
            {path:"login",element:<Login/>},
            {path:"register",element:<Register/>}
        ]
    },
    {
        path:"*",
        element: <div>404 Not Found</div>
    }
])

export  default Router;


    