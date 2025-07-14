import { Link } from "react-router-dom";
import "../App.css";

function PetCard({ post }) {
    return (
        <div className="pet-card">
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
    );
}

export default PetCard;