(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{14:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),c=n(9),i=n.n(c),r=(n(14),n(3)),l=n(0);var o=function(t){return Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("div",{className:"datails_img",children:Object(l.jsx)("img",{src:t.songDetail.img_src,alt:"Song"})}),Object(l.jsx)("h3",{className:"details_title",children:t.songDetail.title}),Object(l.jsx)("h3",{className:"details_singer",children:t.songDetail.artist})]})},j=n(6),u=n(5);var g=function(){return Object(l.jsxs)("div",{className:"control",children:[Object(l.jsx)("button",{className:"control_skip",children:Object(l.jsx)(u.a,{icon:j.a})}),Object(l.jsx)("button",{className:"control_playButton",children:Object(l.jsx)(u.a,{icon:j.c})}),Object(l.jsx)("button",{className:"control_skip",children:Object(l.jsx)(u.a,{icon:j.b})})]})};var d=function(t){var e=Object(a.useRef)(null),n=Object(a.useState)(!1),s=Object(r.a)(n,2),c=s[0],i=s[1];return Object(a.useEffect)((function(){c?e.current.play():e.current.pause()})),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("h3",{children:"Playing Now"}),Object(l.jsx)(o,{songDetail:t.songs[t.currentSongIndex]}),Object(l.jsx)("audio",{className:"player_music",src:t.songs[t.currentSongIndex].audio_src,controls:!0,ref:e}),Object(l.jsx)(g,{isPlaying:c,setIsPlaying:i,skipSong:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&t.setCurrentSongIndex((function(){var e=t.currentSongIndex;++e>t.songs.length-1&&(e=0)}))}}),Object(l.jsxs)("p",{children:["Next Up: ",Object(l.jsxs)("span",{children:[t.songs[t.nextSongIndex].title," "," by "," ",t.songs[t.nextSongIndex].artist]})]})]})};var b=function(){var t=Object(a.useState)([{title:"Titaliya Warga ",artist:"Hary Alina",audio_src:"Titliaan Warga.mp3",img_src:"titaliya.jpg"},{title:"burjkalifa",artist:"Badsha",audio_src:"BurjKhalifa.mp3",img_src:"burjkalifa.jpg"},{title:"Care Ni Karda ",artist:"Honey Singh",audio_src:"Care Ni Karda.mp3",img_src:"care-ni-karda.jpg"},{title:"Naach Meri Rani ",artist:"Milka singh",audio_src:"Naach Meri Rani.mp3",img_src:"nach-meri-rani.jpg"}]),e=Object(r.a)(t,1)[0],n=Object(a.useState)(0),s=Object(r.a)(n,2),c=s[0],i=s[1],o=Object(a.useState)(0),j=Object(r.a)(o,2),u=j[0],g=j[1];return Object(a.useEffect)((function(){g((function(){return c+1>e.length-1?0:c+1}))}),[c,e.length]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{currentSongIndex:c,setCurrentSongIndex:i,nextSongIndex:u,songs:e})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.04081278.chunk.js.map