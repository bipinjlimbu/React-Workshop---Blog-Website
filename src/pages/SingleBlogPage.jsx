import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
const isLoginedIn=true;

const SingleBlogPage=()=>{
    const params=useParams();
    const navigate=useNavigate();
    const [searchParams,setSearchParams]=useSearchParams();
    const location=useLocation();

    const handleClick=()=>{
        if(!isLoginedIn) return navigate("/login");
        alert("You are already logged in");
    }
    const handleParamsClick=(e)=>{
        setSearchParams({page:e});
    }

    return(
        <div className="sb-page">
            <h1 className="sb-head">Single Product Page {JSON.stringify(params)}</h1>
            <p className="sb-details">This is the detailed view of a single product.</p>
            <button onClick={handleClick} className="sb-button">Navigate</button>
            <div className="sb-info">
            {
                [1,2,3,4,5].map((item)=><p onClick={()=>handleParamsClick(item)} key={item}>{item}</p>)
            }
            </div>
        </div>
    )
}
export default SingleBlogPage;