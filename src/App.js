import React from "react";
import { useState } from "react";
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
import ScrollToTop from "./Components/ScrollTop/ScrollTop";
import Kakaoshare from "./Components/Kakaoshare/Kakaoshare";
import SetPullToRefresh from "./Components/PullToRefresh/SetPullToRefresh";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
function App() {
  const onClickToastAlready = () => {
    ToastsStore.success("이미 작성한 게시물입니다");
  };
  const onClickToastComplete = () => {
    ToastsStore.success("게시물 업로드가 완료되었습니다");
  };
  <style jsx="true">{`
  .toast {
    font-size: 13px !important;
    color: #fff !important;
    justify-content: center;
    align-items: center;
    background-color: rgba(178, 226, 171, 0.75) !important;
    box-shadow: 0px 2px 2px #dadada;
    border-radius: 20px !important;
    min-height: 20px !important;
    width: 200px !important;
    margin: 4px auto !important;
    padding: 8px 35px;
    display: inline-block !important;
    line-height: 22px !important;
  }
`}</style>

{/* <button
    type="button"
    id="popup"
    onClick={onClickToastPopup}
    className="toast-button"
  >
    toast
  </button> */}

<ToastsContainer
  className="custom-alert-position"
  position={ToastsContainerPosition.BOTTOM_CENTER}
  store={ToastsStore}
  lightBackground
/>
  const [point, setPoint] = useState(0);
  return (
    <>
      <BrowserRouter>
        {/* <Header  /> */}
        {/* <Kakaoshare /> */}
        <SetPullToRefresh />
        <Routes>
          <Route
            path="/"
            element={<Login />}
            setPoint={setPoint}
            point={point}
          />
          <Route path="/users/kakao/callback" element={<Loding />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/modal" element={<Modal />} />
          <Route
            path="/mission"
            element={
              <Mission setPoint={setPoint} point={point} Header={<Header />} />
            }
          />
          <Route path="/missioncamera" element={<MissionCamera />} />
          <Route
            path="/missioncamera/:id"
            element={<MissionCamera point={point} setPoint={setPoint} />}
          />
          <Route path="/upload" element={<Upload Header={<Header />} />} />
          <Route
            path="/explainwating/:id"
            element={
              <ExplainWating
                Header={<Header />}
                setPoint={setPoint}
                point={point}
              />
            }
          />
          <Route path="/upload/:id" element={<Upload Header={<Header />} onClickToastAlready={onClickToastAlready} onClickToastComplete={onClickToastComplete} ToastsContainer={<ToastsContainer/>} />} />
          <Route path="/explain" element={<Explain Header={<Header />} />} />
          <Route
            path="/explain/:id"
            element={<Explain Header={<Header />} />}
          />
          <Route path="/mypage" element={<Mypage Header={<Header />} />} />
          <Route path="/archive" element={<Archive Header={<Header />} />} />
          <Route path="/updatemypage" element={<UpdateMyPage />} />
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
