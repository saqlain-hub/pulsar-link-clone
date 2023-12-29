import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Posts from "./pages/Posts";
import Layout from "./pages/Layout";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Routes>
        {!login && (
          <Route
            path="/"
            element={<Login setLogin={setLogin} login={login} />}
          />
        )}
        {login && (
          <Route element={<Root setLogin={setLogin} login={login} />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/posts" element={<Posts />} />
              {/* <Route path="/post/:id" element={<Post />} /> */}
            </Route>
            <Route path="/user/:id/profile" element={<Profile />} />
            <Route path="/user/:id/inbox" element={<Inbox />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
