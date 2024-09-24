import { useState, useEffect } from "react";
import PostList from "../components/PostList";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";
import LoadingPost from "../components/LoadingPost";

function OthContext() {

    const {id} = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://ee5cb8516bb441c8.mokky.dev/category/${id}`);
                setCategory(response.data);
            } catch(e) {
                console.log(e);
            }
        }
        
        async function fetchPosts() {
            try {
                setIsLoading(true)
                const response = await axios.get(`https://ee5cb8516bb441c8.mokky.dev/post`);
                setPosts(response.data);
            } catch(error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        fetchCategory();
    }, [id]);

    return(
        <section class="mobile-block is-secondary">
            <div class="mobile-block_header is-red"></div>
            <div class="all-main-block">
        {isLoading ? (<LoadingPost />) : (
            <>
                {posts.map((post) => {
                    return post.category === category.name ? (
                        <PostCard key={post.id} post={post} />
                    ) : null
                })} 
            </>
        )}
            </div>
            
        </section>
    );
}

export default OthContext;