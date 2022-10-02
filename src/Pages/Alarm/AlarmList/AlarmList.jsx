//react import
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";
//module import
import { useGetMessageAlert } from "../../../hooks/useNotification";
import { useQueryClient } from "react-query";
import "./AlarmList.css";
import { IoIosArrowBack } from "react-icons/io";
import instance from "../../../Redux/modules/instance";
//styled import
import {
  ContentDiv,
  ModalBackGround,
  ModalArea,
  ModalTopArea,
  ModalBottomArea,
  ModalTopText,
  ModalBottomText,
  CenterLine,
} from "./AlarmListStyled";
import { CheckIcon, CheckedIcon } from "../../../Components/Check/Check";
import AlarmTrashIcon from "../../../static/components/AlarmList/AlarmTrashIcon";

const EventSource = EventSourcePolyfill || NativeEventSource;
const AlarmList = ({ onClickToast }) => {
  const [del, setDel] = useState(false);
  const [delArr, setDelArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [newAlert, setNewAlert] = useState([]);
  const queryClient = useQueryClient();
  const { data: alertList } = useGetMessageAlert();
  const token = localStorage.getItem("Authorization");
  const allList = alertList?.data;
  const navigate = useNavigate();
  console.log(delArr);
  useEffect(() => {
    if (token) {
      setNewAlert(allList);
      queryClient.invalidateQueries("unreadList");
    }
  }, [allList]);
  useEffect(() => {
    instance.post("/notification/open");
  }, []);
  // instance.delete(`/notifications/delete/${item.id}`);
  const ReadingAlarm = (id, url) => {
    instance.post(`/notification/read/${id}`);
    navigate(url);
  };
  const BackArrow = () => {
    setDel(false);
    setDelArr([]);
  };
  // console.log(newAlert.filter((i) => !delArr.includes(i)))
  const DeleteAlarm = () => {
    setNewAlert([...newAlert.filter((i) => !delArr.includes(i.id))]);
    instance.delete("/notifications/delete", { data: delArr });
    setDelArr([]);
    setDel(false);
    setModal(false);
    onClickToast("삭제가 완료되었습니다.");
  };
  return (
    <>
      {modal ? (
        <>
          <ModalBackGround />
          <ModalArea>
            <ModalTopArea>
              <ModalTopText>
                {
                  "알림 기록을 삭제하시면 복구가 불가능합니다.\n 삭제하시겠습니까?"
                }
              </ModalTopText>
              <CenterLine />
              <ModalBottomText onClick={() => DeleteAlarm()}>
                삭제하기
              </ModalBottomText>
            </ModalTopArea>
            <ModalBottomArea onClick={() => setModal(false)}>
              취소
            </ModalBottomArea>
          </ModalArea>
        </>
      ) : null}
      <div className="alarmlist-back-arrow-area">
        <IoIosArrowBack
          className="alarmlist-back-arrow-icon"
          onClick={() => (del ? BackArrow() : navigate(-1))}
        />
        <div className="alarmlist-title-text">알림</div>
        <div
          className="alarmlist-check-button"
          onClick={() => {
            !del
              ? setDel(true)
              : del && delArr.length > 0
              ? setModal(true)
              : onClickToast("삭제할 알림을 선택해주세요.");
          }}
        >
          {del ? <AlarmTrashIcon /> : "선택"}
        </div>
      </div>
      <div className="alarmlist-dummy-div"></div>
      <div className="alarmlist-box">
        {newAlert
          ? newAlert.map((item, index) => (
              <ContentDiv
                onClick={() => {
                  del && !delArr.includes(item.id)
                    ? setDelArr([...delArr, item.id])
                    : del && delArr.includes(item.id)
                    ? setDelArr([...delArr.filter((i) => i !== item.id)])
                    : ReadingAlarm(item.id, item.url);
                }}
                key={item + index}
                read={modal ? true : item.status}
              >
                {del ? (
                  <div className="alarmlist-icon-div">
                    {delArr.includes(item.id) ? (
                      <CheckedIcon color={"#868686"} />
                    ) : (
                      <CheckIcon color={"#868686"} />
                    )}
                  </div>
                ) : null}
                <div className="alarmlist-contents-and-time">
                  <div className="alarmlist-box-contents">
                    {item.notificationContent}
                  </div>
                  <div className="alarmlist-box-time">
                    {item.createAt.split("T")[0].split("-")[1][0] === "0"
                      ? item.createAt.split("T")[0].split("-")[1][1]
                      : item.createAt.split("T")[0].split("-")[1]}
                    월{item.createAt.split("T")[0].split("-")[2]}일{" "}
                    {item.createAt.split("T")[1].split(":")[0]}:
                    {item.createAt.split("T")[1].split(":")[1]}
                  </div>
                </div>
                <div className="alarmlist-box-img-area">
                  <img
                    className="alarmlist-box-img"
                    src={
                      item.imgUrl === "nullImg"
                        ? "/images/WaitingLeaf.png"
                        : item.imgUrl
                    }
                  />
                </div>
              </ContentDiv>
            ))
          : null}
      </div>
    </>
  );
};

export default AlarmList;
