//react import
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
//modules import
import instance from '../../../Redux/modules/instance';
import { getCertThunk } from '../../../Redux/modules/userInfoSlice';
//styled import
import './Upload.css';
import {
  UploadContentTextArea,
  UploadButton,
  ShareButton,
  UploadSkeleton,
  ButtonArea,
} from './UploadStyled';
import Slide from 'react-reveal/Slide';

const Upload = ({Header}) => {
  const [content, contentHandler] = useInput('');
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) =>
    state.userInfo.certification.length > 1
      ? state.userInfo.certification.filter((item) => item.id == param)[0]
      : state.userInfo.certification[0]
  );
  const testText = { content: content };
  const Upload = ({Header}) => {
    instance.post(`/profiles/missions/${param}`, testText);
    navigate('/mypage');
  };

  useEffect(() => {
    setLoding(true);
    dispatch(getCertThunk());
    setLoding(false);
  }, []);
  return (
    <>
    {Header}
      <Slide bottom>
        <div className="upload-wrap-shape">
          {!loading && data ? (
            <>
              <div className="upload-mission-name-and-tag-area">
                <div className="upload-mission-name-text">
                  {data.missionName}
                </div>
                <div className="upload-mission-tag-text">{data.tag}</div>
              </div>
              <img
                className="upload-mission-image-area"
                src={data.missionImgUrl}
              ></img>
              <UploadContentTextArea
                className="upload-contents-input"
                onChange={contentHandler}
                maxLength={140}
                placeholder="인증샷 설명을 자유롭게 적어주세요"
              ></UploadContentTextArea>
              <ButtonArea>
                {' '}
                <UploadButton
                  className="upload-button-upload"
                  onClick={() =>
                    data.onFeed
                      ? alert('이미 작성하신 게시물입니다.')
                      : Upload()
                  }
                >
                  피드에 올리기
                </UploadButton>
                <ShareButton className="upload-button-share">
                  공유하기
                </ShareButton>
              </ButtonArea>
            </>
          ) : (
            <UploadSkeleton />
          )}
        </div>
      </Slide>
    </>
  );
};

export default Upload;
