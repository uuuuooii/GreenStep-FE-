//react import
import React from "react";
//styled import
import { RaceBy } from "@uiball/loaders";
import {
  LoadingArea,
  LodingText,
  LodingTextArea,
  LodingBarArea,
} from "./LoadingBarStyled";

const LoadingBar = () => {
  return (
    <LoadingArea>
      <LodingTextArea>
        <LodingText>페이지 로딩중...</LodingText>
      </LodingTextArea>
      <LodingBarArea>
        {" "}
        <RaceBy size={200} lineWeight={20} speed={3} color=" #B2E2AB" />
      </LodingBarArea>
    </LoadingArea>
  );
};
export default LoadingBar;
