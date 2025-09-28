import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="ha-page">
            <h1 className="ha-head">Home Page</h1>
            <p className="ha-mid">Welcome to the Home Page!</p>
            <Link to="/about" className="ha-link">Go to About Page</Link>
        </div>
    )
}