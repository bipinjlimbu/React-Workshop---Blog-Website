import { Link } from "react-router-dom";

export default function HomePage() {
    return (
    <div className="home-page">
        <h1 className="homehead">Home Page</h1>
        <p className="homemid">Welcome to the Home Page!</p>
        <Link viewTransition to="/about" className="homelink">Go to About Page</Link>
    </div>
    )
}