import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Mission from "./Pages/Mission/Mission";
import Feed from "./Pages/Feed/Feed";
import Main from "./Pages/Main";
import Mypage from "./Pages/MyPage/MyPage";
import Modal from "./Pages/Login/Modal"
import MissionCamera from "./Pages/Mission/MissionCamera";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/missioncamera" element={<MissionCamera />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
