import { Link, Outlet } from "react-router";

export default function Navbar() {
    return (<>

        <header>
            <nav style={{display:"flex",gap:"20px",padding:"10px",}}>
                <Link viewTransition to="/">Home</Link>
                <Link viewTransition to="/about">About</Link>
                <Link viewTransition to="/blog">Blog</Link>

            </nav>
        </header>
    </>
    )
}