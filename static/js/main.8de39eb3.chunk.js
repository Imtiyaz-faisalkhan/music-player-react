(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{14:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(9),c=n.n(i),r=(n(14),n(3)),o=n(0);var l=function(e){return Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)("div",{className:"datails_img",children:Object(o.jsx)("img",{src:"/music-player-react"+e.songDetail.img_src,alt:""})}),Object(o.jsx)("h3",{className:"details_title",children:e.songDetail.title}),Object(o.jsx)("h3",{className:"details_singer",children:e.songDetail.artist})]})},u=n(5),g=n(6);var j=function(e){return Object(o.jsxs)("div",{className:"control",children:[Object(o.jsx)("button",{className:"control_skip",onClick:function(){return e.skipSong(!1)},children:Object(o.jsx)(g.a,{icon:u.a})}),Object(o.jsx)("button",{className:"control_playButton",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(o.jsx)(g.a,{icon:e.isPlaying?u.c:u.d})}),Object(o.jsx)("button",{className:"control_skip",onClick:function(){return e.skipSong()},children:Object(o.jsx)(g.a,{icon:u.b})})]})};var d=function(e){var t=Object(s.useRef)(null),n=Object(s.useState)(!1),a=Object(r.a)(n,2),i=a[0],c=a[1];return Object(s.useEffect)((function(){i?t.current.play():t.current.pause()})),Object(o.jsxs)("div",{className:"player",children:[Object(o.jsx)("h3",{children:"Playing Now"}),Object(o.jsx)(l,{songDetail:e.songs[e.currentSongIndex]}),Object(o.jsx)(j,{isPlaying:i,setIsPlaying:c,skipSong:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})):e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t}))}}),Object(o.jsx)("audio",{className:"player_music",src:"/music-player-react"+e.songs[e.currentSongIndex].audio_src,controls:!0,ref:t}),Object(o.jsxs)("p",{children:["Next Up: ",Object(o.jsxs)("span",{children:[e.songs[e.nextSongIndex].title," "," by "," ",e.songs[e.nextSongIndex].artist]})]})]})};var b=function(){var e=Object(s.useState)([{title:"Titaliya Warga ",artist:"Hary Alina",audio_src:"/songs/Titliaan Warga.mp3",img_src:"/images/titaliya.jpg"},{title:"burjkalifa",artist:"Badsha",audio_src:"/songs/BurjKhalifa.mp3",img_src:"/images/burjkalifa.jpg"},{title:"Care Ni Karda ",artist:"Honey Singh",audio_src:"/songs/Care Ni Karda.mp3",img_src:"/images/care-ni-karda.jpg"},{title:"Naach Meri Rani ",artist:"Milka singh",audio_src:"/songs/Naach Meri Rani.mp3",img_src:"/images/nach-meri-rani.jpg"}]),t=Object(r.a)(e,1)[0],n=Object(s.useState)(0),a=Object(r.a)(n,2),i=a[0],c=a[1],l=Object(s.useState)(0),u=Object(r.a)(l,2),g=u[0],j=u[1];return Object(s.useEffect)((function(){j((function(){return i+1>t.length-1?0:i+1}))}),[i,t.length]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d,{currentSongIndex:i,setCurrentSongIndex:c,nextSongIndex:g,songs:t})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.8de39eb3.chunk.js.map