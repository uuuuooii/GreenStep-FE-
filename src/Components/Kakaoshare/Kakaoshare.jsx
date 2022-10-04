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
          title: title || "Green Step",
          description:
            description ||
            "당신의 작지만 일상적인 환경 미션을 통해서, 나비 효과를 만들어 아주 큰 변화로 이끌어보세요.",
          imageUrl:
            image ||
            "https://postfiles.pstatic.net/MjAyMjA5MjFfMTA3/MDAxNjYzNzQyMDU4NzMw.TdlM0tvkOs_rkWCx6UYP0PtBBfrhashZENJ2MC0jyjAg.A_FnkPKNVen8Jl8wmK7Y8g7pskNWuDish7JpVGuqIswg.PNG.eunhey2717/KakaoTalk_Photo_2022-09-20-16-12-31_004.png?type=w773",
          link: {
            mobileWebUrl: url || "https://greenstepapp.com/",
            webUrl: url || "https://greenstepapp.com/",
          },
        },
        buttons: [
          {
            title: "자세히 보기",
            link: {
              mobileWebUrl: "https://greenstepapp.com/",
              webUrl: "https://greenstepapp.com/",
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
        <div className="kakaoBtnTxt">카카오 공유</div>
      </a>
    </>
  );
}

export default KakaoShare;
