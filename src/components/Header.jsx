import categoryIcon from "../assets/images/hbuttom.svg"
import { Link } from "react-router-dom";
function Header() {
    return(
    <header class="header">
        <div class="container">
            <Link to="/" class="btn-category">
                <img src={categoryIcon} alt="Home button" />
            </Link>
        </div>
    </header>
    );
}

export default Header;