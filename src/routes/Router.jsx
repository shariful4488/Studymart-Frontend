import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";
import PartnerDetails from "../pages/PartnerDetails";
import PrivateRoute from "../provider/PrivateRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "", 
                element: <Home />
            },
            {
                // Dynamic Route for Partner Details
                path: "partner/:id", 
                element: (
                    <PrivateRoute>
                        <PartnerDetails />
                    </PrivateRoute>
                ),
                // Data fetch korar jonno loader
                loader: async ({ params }) => {
                    const res = await fetch("/partners.json");
                    const data = await res.json();
                    const singlePartner = data.find(p => p.id == params.id);
                    return singlePartner;
                }
            }
        ]
    },

    // Auth Routes
    {
        path: "/auth",
        element: <Authlayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> }
        ]
    },
    {
        path: "*",
        element: (
            <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-red-500">
                404 Not Found
            </div>
        )
    }
]);

export default Router;