import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login/Login";
import Mission from "./Pages/Mission/Mission";
import Feed from "./Pages/Feed/Feed";
import Main from "./Pages/Main";
import Mypage from "./Pages/MyPage/MyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
