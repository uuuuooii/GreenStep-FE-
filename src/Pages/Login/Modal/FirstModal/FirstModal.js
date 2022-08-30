import React from 'react';
import Modal from '../../Modal';
import {
  FirstModalBody,
  FirstModalSection,
  ArrowArea,
  ArrowBack,
  ModalHeader,
  TopText,
  SelectBody,
  ImgArea,
  SelectImg,
  SeleceArea,
  ImgDiv
} from './FirstModalStyled';



const FirstModal = ({display,setDisplay,setImg}) => {
    const URL = process.env.REACT_APP_URL;
    return (
    <FirstModalBody display={display}>
      <FirstModalSection>
        <ModalHeader>

            {/* <ArrowArea>
              <ArrowBack />
            </ArrowArea> */}
        <TopText>
            프로필 사진
            </TopText>

        </ModalHeader>
<SelectBody>

<ImgArea>
<SeleceArea>

<ImgDiv>
<SelectImg src='https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720' onClick={()=>{setDisplay(3);setImg(null)}}/>
 <TopText>카카오톡 프로필</TopText>
</ImgDiv>

<ImgDiv>
<SelectImg src='https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720' onClick={()=>{setDisplay(2);setImg(null)}}/>
 <TopText>프로필 캐릭터 선택</TopText>
</ImgDiv>

</SeleceArea>

</ImgArea>

</SelectBody>

      </FirstModalSection>
    </FirstModalBody>
  );
};

export default FirstModal;
