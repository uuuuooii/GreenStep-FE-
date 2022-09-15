import React, { useEffect } from "react";
import "./Kakaoshare.css";

//카카오톡 공유버튼 만들기
function KakaoShare({
  image = "",
  url = "",
  title = "",
  description = "",
  children,
}) {
  function createShareButton() {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("478a698553edb96f76445222b0156733");
      }
      kakao.Link.createDefaultButton({
        container: ".kakaoBtn",
        objectType: "feed",
        content: {
          title: title || "title = string",
          description: description || "description = string",
          imageUrl: image || "image = string",
          link: {
            mobileWebUrl: url || "url = string",
            webUrl: url || "url = string",
          },
        },
        buttons: [
          {
            title: "자세히 보기",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    } else {
      console.log("KaKao CDN fetch error");
    }
  }

  useEffect(() => {
    createShareButton();
  }, []);

  return (
    <>
      <a className="kakaoBtn">
        <p className="kakaoBtnTxt">공유하기</p>
      </a>
    </>
  );
}

export default KakaoShare;
