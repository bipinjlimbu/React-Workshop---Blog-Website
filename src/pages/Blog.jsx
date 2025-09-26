import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
const Blog=()=>{
    const [blogData,setBlogData]=useState([]);
    const getBlogData=async ()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts");
        const data=await response.json();
        setBlogData(data);
    }
    useEffect(()=>{
        getBlogData();
    },[]);
    return (
        <div className="blog-page">
            <h1 className="blog-head">Product Page</h1>
            <div className="blog-container">
                {blogData.map((item)=><Card key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

const Card=({item})=>{
    return (
        <Link to={`/blog/${item.id}`} className="blog-link">
        <div className="blog-card">
                    <h2 className="bc-title"> {item.title}</h2>
                    <p className="bc-details">{item.body}</p>
                </div>
        </Link>
    )
}
export default Blog;