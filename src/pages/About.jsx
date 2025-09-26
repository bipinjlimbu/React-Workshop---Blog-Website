import { Link } from "react-router-dom";

export default function About() {
    return <div>

        <h1>About Page</h1>
        <p>This is the About Page.</p>
        <Link viewTransition to="/">Go to Home Page</Link>

    </div>
}