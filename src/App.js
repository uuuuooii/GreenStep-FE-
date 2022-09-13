import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin/Admin";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import Login from "./Pages/Login/Login";
import Mission from "./Pages/Mission/Mission";
import Upload from "./Pages/Mission/Upload/Upload";
import Explain from "./Pages/Mission/Explain/Explain";
import Feed from "./Pages/Feed/Feed";
import Mypage from "./Pages/MyPage/MyPage/MyPage";
import UpdateMyPage from "./Pages/MyPage/UpdateMyPage/UpdateMyPage";
import Archive from "./Pages/MyPage/MyPage/Archive/Archive";
import PhotoShotsArchive from "./Pages/MyPage/PhotoShotsArchive/PhotoShotsArchive";
import DetailPosts from "./Pages/MyPage/DetailPosts/DetailPosts";
import DetailPhotoShots from "./Pages/MyPage/DetailPhotoShots/DetailPhotoShots";
import Modal from "./Pages/Login/Modal";
import MissionCamera from "./Pages/Mission/Camera/MissionCamera";
import Loding from "./Pages/Loding/Loding";
import Error from "./Pages/Error/Error";
import instance from "./Redux/modules/instance";
import ScrollToTop from "./Components/ScrollTop/ScrollTop";
import ShareKakao from "./Components/Kakaoshare/ShareKakao";
import SetPullToRefresh from "./Components/PullToRefresh/SetPullToRefresh";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header  /> */}
        <ShareKakao />
        <SetPullToRefresh />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users/kakao/callback" element={<Loding />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/mission" element={<Mission Header={<Header />} />} />
          <Route path="/missioncamera" element={<MissionCamera />} />
          <Route path="/missioncamera/:id" element={<MissionCamera />} />
          <Route path="/upload" element={<Upload Header={<Header />} />} />
          <Route path="/upload/:id" element={<Upload Header={<Header />} />} />
          <Route path="/explain" element={<Explain Header={<Header />} />} />
          <Route
            path="/explain/:id"
            element={<Explain Header={<Header />} />}
          />
          <Route path="/mypage" element={<Mypage Header={<Header />} />} />
          <Route path="/archive" element={<Archive Header={<Header />} />} />
          <Route
            path="/updatemypage"
            element={<UpdateMyPage Header={<Header />} />}
          />
          <Route
            path="/archive/:id"
            element={<Archive Header={<Header />} />}
          />
          <Route
            path="/photoshotsarchive"
            element={<PhotoShotsArchive Header={<Header />} />}
          />
          <Route
            path="/detailposts"
            element={<DetailPosts Header={<Header />} />}
          />
          <Route
            path="/detailposts/:id"
            element={<DetailPosts Header={<Header />} />}
          />
          <Route
            path="/detailphotoshots"
            element={<DetailPhotoShots Header={<Header />} />}
          />
          <Route path="/feed" element={<Feed Header={<Header />} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
