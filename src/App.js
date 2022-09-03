import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

import Login from "./Pages/Login/Login";
import Mission from "./Pages/Mission/Mission";
import Upload from "./Pages/Mission/Upload/Upload";
import Explain from "./Pages/Mission/Explain/Explain";
import Feed from "./Pages/Feed/Feed";
import Mypage from "./Pages/MyPage/MyPage/MyPage";
import DetailPosts from "./Pages/MyPage/DetailPosts/DetailPosts";
import DetailPhotoShots from "./Pages/MyPage/DetailPhotoShots/DetailPhotoShots";
import Modal from "./Pages/Login/Modal";
import MissionCamera from "./Pages/Mission/Camera/MissionCamera";
import Loding from "./Loding";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users/kakao/callback" element={<Loding />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/missioncamera" element={<MissionCamera />} />
          <Route path="/missioncamera/:id" element={<MissionCamera />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload/:id" element={<Upload />} />
          <Route path="/explain" element={<Explain />} />
          <Route path="/explain/:id" element={<Explain />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/detailposts" element={<DetailPosts />} />
          <Route path="/detailphotoshots" element={<DetailPhotoShots />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
