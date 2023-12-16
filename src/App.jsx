import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Posts from "./pages/Posts";
import Layout from "./pages/Layout";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Inbox from "./pages/Inbox";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Root />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<Posts />} />
            {/* <Route path="/post/:id" element={<Post />} /> */}
          </Route>
          <Route path="/user/:id/profile" element={<Profile />} />
          <Route path="/user/:id/inbox" element={<Inbox />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
