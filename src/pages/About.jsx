import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="ha-page">
            <h1 className="ha-head">About Page</h1>
            <p className="ha-mid">This is the About Page.</p>
            <Link to="/" className="ha-link">Go to Home Page</Link>
        </div>
    )
}