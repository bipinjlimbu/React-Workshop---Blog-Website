import { Link } from "react-router";

export default function HomePage() {
    return <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page!</p>
        <Link viewTransition to="/about">Go to About Page</Link>
    </div>
}