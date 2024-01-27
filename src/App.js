import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js"
import Main from "./Components/Main.js"
import Footer from "./Components/Footer.js"
import About from "./Components/About.js";
import Error from "./Components/Error.js";
import ContactUs from "./Components/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AppContextProvider } from "./Components/AppContext.js";

function AppLayout(){
    return (
        <div className="text-sm">
            <AppContextProvider>
                <Header />
                <Outlet />
                <Footer />
            </AppContextProvider>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);