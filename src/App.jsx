import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Childhood from "./pages/Childhood";
import Alwaystogether from "./pages/Alwaystogether";
import Ustogether from "./pages/Ustogether";
const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/childhood" element={<Childhood />} />
          <Route path="/ustogether" element={<Ustogether />} />
          <Route path="/alwaystogether" element={<Alwaystogether />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
