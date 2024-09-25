import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../Root/Root";
import Admin from "../pages/Admin/Admin";
import AddEmp from "../components/AddEmp";
import AdminHome from "../pages/Admin/AdminHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>
                
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin></Admin>,

        children: [
            {
                path: '/admin',
                element: <AdminHome></AdminHome>
            },
            {
                path: '/admin/add-emp',
                element: <AddEmp></AddEmp>
            }
        ]
    }
])

export default router;