// import React from "react";

// const ChannelTalk = () => {
//     (function () {
//         var w = window;
//         if (w.ChannelIO) {
//           return (window.console.error || window.console.log || function () {})(
//             "ChannelIO script included twice."
//           );
//         }
//         var ch = function () {
//           ch.c(arguments);
//         };
//         ch.q = [];
//         ch.c = function (args) {
//           ch.q.push(args);
//         };
//         w.ChannelIO = ch;

//         function l() {
//           if (w.ChannelIOInitialized) {
//             return;
//           }
//           w.ChannelIOInitialized = true;
//           var s = document.createElement("script");
//           s.type = "text/javascript";
//           s.async = true;
//           s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
//           var x = document.getElementsByTagName("script")[0];
//           x.parentNode.insertBefore(s, x);
//         }
//         if (document.readyState === "complete") {
//           l();
//         } else if (window.attachEvent) {
//           window.attachEvent("onload", l);
//         } else {
//           window.addEventListener("DOMContentLoaded", l, false);
//           window.addEventListener("load", l, false);
//         }
//       })();
//       ChannelIO("boot", {
//         pluginKey: "0f8cda23-1dfd-49f1-9e44-1eeccf36d4e7",
//       });
//       //End Channel Plugin

//       //pwa
//       var deferredPrompt;

//       window.addEventListener('beforeinstallprompt', function (e) {
//         console.log('beforeinstallprompt Event fired');
//         e.preventDefault();

//         // Stash the event so it can be triggered later.
//         deferredPrompt = e;

//         return false;
//       });

//       // 특정 버튼 클릭 시 설치 시작
//       btnSave.addEventListener('click', function () {
//         if (deferredPrompt !== undefined) {
//           // The user has had a postive interaction with our app and Chrome
//           // has tried to prompt previously, so let's show the prompt.
//           deferredPrompt.prompt();

//           // Follow what the user has done with the prompt.
//           deferredPrompt.userChoice.then(function (choiceResult) {

//             console.log(choiceResult.outcome);

//             if (choiceResult.outcome == 'dismissed') {
//               console.log('User cancelled home screen install');
//             } else {
//               console.log('User added to home screen');
//             }

//             // We no longer need the prompt.  Clear it up.
//             deferredPrompt = null;
//           });
//         }
//       });
//     return(<></>)
// }
