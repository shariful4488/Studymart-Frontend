import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";
import PartnerDetails from "../pages/PartnerDetails";
import PrivateRoute from "../provider/PrivateRoute";
import FindPartners from "../pages/FindPartners";
import CreatePartner from "../pages/CreatePartner";
import MyConnections from "../pages/MyConnections";
import Profile from "../components/Profile";

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
                path: "partner/:id", 
                element: (
                    <PrivateRoute>
                        <PartnerDetails />
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:5000/partner/${params.id}`);
                    const data = await res.json();
                    return data;
                }
            },
            {
                path: "find-partners",
                element: <FindPartners />
            },
            {
                path: "create-profile",
                element: (
                    <PrivateRoute>
                        <CreatePartner />
                    </PrivateRoute>
                )
            },
            {
                path: "my-connections",
                element: (
                    <PrivateRoute>
                        <MyConnections/>
                    </PrivateRoute>
                )
            },
            {
                path: "profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                )
            }

        ]
    },
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