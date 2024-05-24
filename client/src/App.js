import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
 
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';


//** auth middleware */

import { AuthorizeUser ,ProtectRoute } from "./middleware/auth.js";

//** route router */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>

    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser> <Profile /> </AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',    // agar koe page na ho to iskeliye h
        element : <PageNotFound></PageNotFound>

    },
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>            
        </main>
        
    )
}