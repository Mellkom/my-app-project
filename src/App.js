import "./assets/css/style.css"
import Header from "./components/Header";
import CategoryPages from "./pages/CategoryPages";
import CoffeePage from "./pages/CoffeePage";
import ContextPage from "./pages/ContextPage";
import OthContext from "./pages/OthContext";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CategoryPages />}/>
          <Route path="/post/:id" element={<ContextPage />}/>
          <Route path="/categories" element={<CoffeePage />}/>
          <Route path="/category/posts/:id" element={<OthContext />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
