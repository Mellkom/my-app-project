import { useEffect, useState } from "react";
import escbuttomImg from "../assets/images/escbuttom.svg"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingContext from "../components/LoadingContext";
import Error from "../components/Error";

function ContextPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://ee5cb8516bb441c8.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        } fetchPosts();
    }, [id])

    if (isError) {
        return <Error />
    }

    return(
        <section class="mobile-block">
            <div class="mobile-block_header is-lgreen">
            <Link to="/categories" class="Back-buttom">
                <div class="esc-container">
                    <img src={escbuttomImg} alt="Back-icon" />
                </div>
            </Link>
            {isLoading ? (<LoadingContext />) : (
                <div class="container">
                    <div class="all-main-block">
                        <div class="img-container">
                            <div class="coffee_img">
                            <div className="photo-container">
                                <img src={post.imageUrl} alt="photo-container" class="photo-container" />
                                </div>
                            </div>
                            <div class="container">
                                <div class="coffee_data">{post.date}</div>
                                <div class="coffee_title">{post.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </section>
    );
}

export default ContextPage;