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

export const LogoFade = keyframes`
0%{transform:scale(1.1);border-radius:1000px;background-color:white}
35%{transform:scale(0.8);border-radius:1000px;background-color: #DAF2D5}
99%{transform:scale(5);border-radius:1000px;background: linear-gradient(#DAF2D5,white);}
100%{width:400px;height:100%;background: linear-gradient(#DAF2D5,white);}
`

export const FadeBottomOn = keyframes`
0%{opacity:0;transform:translateY(100px)}
50%{opacity:0;transform:translateY(100px)}
100%{opacity:1;transform:translateY(0)}
`;
export const FadeBottomOnImage = keyframes`
0%{opacity:0;transform:translateY(100px)}
50%{opacity:0;transform:translateY(100px)}
100%{opacity:0.5;transform:translateY(0)}
`;
