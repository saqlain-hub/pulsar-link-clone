import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Posts from "./pages/Posts";
import Layout from "./pages/Layout";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Root />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<Posts />} />
            {/* <Route path="/post/:id" element={<Post />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
