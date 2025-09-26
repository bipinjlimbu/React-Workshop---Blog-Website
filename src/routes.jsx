import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import SingleBlogPage from "./pages/SingleBlogPage"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog",
                children:[
                    {
                        index:true,
                        element:<Blog/>
                    },
                    {
                        path:":blogId",
                        element:<SingleBlogPage/>
                    },
                    {
                        path:"*",
                        element:<h1>Blog 404 Not Found</h1>
                    }
                ]
            },
        

        ],
        
    },
    {
        path:"*",
        element:<h1>404 Not Found</h1>
    }
])

export default routes