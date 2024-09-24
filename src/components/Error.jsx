import { Link } from "react-router-dom";

function Error() {
    return(
        <div class="error">
                <div class="container">
                    <h3 class="error-title">Произошла ошибка</h3>
                    <p class="error-description">Проверьте свое подключение к интернету. Возможна ошибка в системе</p>
                    <Link to="/" class="white-btn">Обновить</Link>
                </div>
            </div>
    );
}

export default Error;