import { useEffect, useState } from "react";
import { Link } from "react-router"
const Product=()=>{
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
        <div>
            <h1>Product Page</h1>
            <div >
                {blogData.map((item)=><Card key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

const Card=({item})=>{
    return (
        <Link to={`/blog/${item.id}`} style={{textDecoration:"none",color:"black"}}>
        <div>
                    <h2> {item.title}</h2>
                    <p>{item.body}</p>
                </div>
        </Link>
    )
}
export default Product;