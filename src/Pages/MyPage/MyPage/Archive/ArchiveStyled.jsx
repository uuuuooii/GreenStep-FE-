import styled from "styled-components";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { ImCross } from "react-icons/im";
import {
  AiFillDelete,
  AiOutlineCheckCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;
export const CardArea = styled.div`
  position: relative;
  width: 123px;
  height: 123px;
`;

export const ArchiveArrow = styled(MdOutlineDoubleArrow)`
  &:hover {
    cursor: pointer;
  }
`;
export const ArchiveSelectDiv = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #b2e2ab;
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: ${(props) =>
    props.check.includes(props.num) ? "rgba(255, 255, 255, 0.5)" : "none"};
  display: ${(props) => props.display};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
`;

export const NonCheck = styled(AiOutlineCheckCircle)`
  width: 20px;
  height: 20px;
  bottom: 12px;
  right: 12px;
  position: absolute;
  color: #34bea7;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;
export const Check = styled(AiFillCheckCircle)`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 12px;
  right: 12px;
  color: #34bea7;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;

export const SkeletonCard = styled.div`
  width: 123px;
  height: 123px;
  background-color: gray;
  margin: 0 5px;
`;
export const ModalArea = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  z-index: 500;
`;
export const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DeleteText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  /* height: 115px; */
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
`;
export const DeleteTopText = styled.div`
  color: #868686;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.03em;
  margin: 20px 0;
  padding: 0 28px;
`;
export const DeleteLine = styled.div`
  width: 100%;
  border: 0.5px solid #c3c2c2;
`;

export const DeleteBottomText = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 132%;
  text-align: center;
  color: #ff9e97;
  margin: 10px 0;
`;
export const DeleteCancelButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #ffffff;
  border-radius: 15px;
  width: 340px;
  height: 34px;
  font-weight: 600;
  font-size: 20px;
  line-height: 132%;
  text-align: center;
  letter-spacing: 0.03em;
  color: #84ca79;
  margin: 10px 0;
`;
