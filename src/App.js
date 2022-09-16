import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin/Admin";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import Alert from "./Components/Alert/Alert";
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
import ExplainWating from "./Pages/Mission/Explain/ExplainWating";
import instance from "./Redux/modules/instance";
import Kakaoshare from "./Components/Kakaoshare/Kakaoshare";
import SetPullToRefresh from "./Components/PullToRefresh/SetPullToRefresh";
import { ToastStyle } from "./Components/Toast/Toast";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
function App() {
  const onClickToast = (text) => {
    ToastsStore.success(text);
  };

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Kakaoshare /> */}
        <SetPullToRefresh />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users/kakao/callback" element={<Loding />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/alert" element={<Alert />} />
          <Route
            path="/modal"
            element={<Modal onClickToast={onClickToast} />}
          />
          <Route path="/mission" element={<Mission />} />
          <Route path="/missioncamera" element={<MissionCamera />} />
          <Route
            path="/missioncamera/:id"
            element={<MissionCamera onClickToast={onClickToast} />}
          />
          <Route path="/upload" element={<Upload />} />
          <Route path="/explainwating/:id" element={<ExplainWating onClickToast={onClickToast} />} />
          <Route
            path="/upload/:id"
            element={<Upload onClickToast={onClickToast} />}
          />
          <Route path="/explain" element={<Explain />} />
          <Route path="/explain/:id" element={<Explain />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/updatemypage" element={<UpdateMyPage />} />
          <Route path="/archive/:id" element={<Archive />} />
          <Route path="/photoshotsarchive" element={<PhotoShotsArchive />} />
          <Route path="/detailposts" element={<DetailPosts />} />
          <Route
            path="/detailposts/:id"
            element={<DetailPosts onClickToast={onClickToast} />}
          />
          <Route path="/detailphotoshots" element={<DetailPhotoShots />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {ToastStyle}
        <ToastsContainer
          className="custom-alert-position"
          position={ToastsContainerPosition.BOTTOM_CENTER}
          store={ToastsStore}
          lightBackground
        />
      </BrowserRouter>
    </>
  );
}

export default App;
