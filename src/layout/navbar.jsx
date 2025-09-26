import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <>
        <header className="header">
            <nav className="navbar">
                <Link viewTransition to="/">Home</Link>
                <Link viewTransition to="/about">About</Link>
                <Link viewTransition to="/blog">Blog</Link>
            </nav>
        </header>
    </>
    )
}