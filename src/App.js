import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Blog } from "./pages/Blog";
import { SinglePost } from "./pages/SinglePost";
import { Error } from "./pages/Error";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
