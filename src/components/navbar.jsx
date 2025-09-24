import { Link, Outlet } from "react-router";

export default function Navbar() {
    return (<>

        <header>
            <nav style={{display:"flex",gap:"20px",padding:"10px",}}>
                <Link viewTransition to="/">HOme</Link>
                <Link viewTransition to="/about">ABout</Link>
                <Link viewTransition to="/blog">Blog</Link>

            </nav>
        </header>
    </>
    )
}