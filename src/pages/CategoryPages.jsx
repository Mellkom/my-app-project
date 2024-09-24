import { useEffect, useState } from "react";
import newsIcon from "../assets/images/news.svg"
import { Link } from "react-router-dom";
import LoadingCategory from "../components/LoadingCategory";
import axios from "axios";
import Error from "../components/Error";

function CategoryPages() {

    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://ee5cb8516bb441c8.mokky.dev/category`);
                setCategory(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        } fetchCategory();
    }, []);

    if (isError) {
        return <Error />
    }

    return(
        <section class="mobile-block">
                <div class="mobile-block_header is-orange">
                </div>
                {isLoading ? (<LoadingCategory />) : (
                    <div class="container">
                    <div class="category-row">
                        <Link to="/categories" class="category_item">
                            <img src={newsIcon} alt="Новости" class="category-item__img" />
                            <span class="category-item__title">Все новости</span>
                        </Link>
                        {category.map((category) =>
                            <Link to={`/category/posts/${category.id}`} class="category_item">
                                    <img src={category.imageUrl} alt={category.name} class="category-item__img" />
                                <span class="category-item__title">{category.name}</span>
                            </Link>
                        )}
                    </div>
                </div>
                )}
                
            </section>
    );
}

export default CategoryPages;