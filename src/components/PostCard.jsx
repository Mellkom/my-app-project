import { Link } from "react-router-dom";

function PostCard({post}) {
    return(
       <Link to={`/post/${post.id}`} class="post-container">
            <div class="coffee-block">{post.title}</div>
            <div class="coffee-block_data">{post.date}</div>
        </Link>
    );
}

export default PostCard;