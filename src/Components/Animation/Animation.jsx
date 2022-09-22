import styled, { keyframes } from "styled-components";

export const FadeOn = keyframes`
from{opacity:0}
to{opacity:1}
`;
export const FadeOut = keyframes`
from{opacity:1}
to{opacity:0}
`;
export const SlideBottom = keyframes`
from{transform:translateY(300px)}
to{transform:translateY(0px)}
`;

