"use strict";(self.webpackChunkwebpack_setup=self.webpackChunkwebpack_setup||[]).push([[14,633,395],{1135:(e,t,o)=>{o.d(t,{E:()=>i,G:()=>s});var r=o(738),n=o(6575),c=o(1863);r.Ay.registerPlugin(n.u);const l=r.Ay.matchMedia(),i=(e,t)=>{(0,c.jo)(t,"_is-active"),t[e]&&t[e].classList.add("_is-active")},s=()=>{document.querySelector(".item-card__swiper")&&l.add("(min-width: 1024px)",(()=>{const e=document.querySelectorAll(".item-card__thumbs-slide");document.querySelectorAll(".item-card__slide").forEach(((t,o)=>{r.Ay.timeline({scrollTrigger:{trigger:t,start:"top top",end:"bottom bottom",onEnter:t=>{i(o,e)},onEnterBack:t=>{i(o,e)}}})}))}))}},7633:(e,t,o)=>{o.r(t),o.d(t,{locoScroll:()=>i,toggleScroll:()=>s});var r=o(6383),n=o(738),c=o(1135),l=o(6575);n.Ay.registerPlugin(l.u);const i=new r.Ay({el:document.querySelector(".wrapper"),smooth:!0,mobile:{smooth:!1},tablet:{smooth:!1,breakpoint:1025}});new ResizeObserver((()=>{setTimeout((()=>{i.destroy(),i.update(),i.init()}),100)})).observe(document.querySelector("main"));const s={touchStart:()=>{i.stop()},touchEnd:()=>{i.start()}};window.addEventListener("load",(function(){l.u.scrollerProxy(i.el,{scrollTop(e){return arguments.length?i.scrollTo(e,0,0):i.scroll.instance.scroll.y},getBoundingClientRect:()=>({top:0,left:0,width:window.innerWidth,height:window.innerHeight}),pinType:i.el.style.transform?"transform":"fixed"}),l.u.addEventListener("refresh",(()=>i.update())),l.u.defaults({scroller:i.el}),setTimeout((()=>{l.u.refresh(),l.u.update()}),0),(0,c.G)(),setTimeout((()=>{i.update()}),1e3)})),window.addEventListener("resize",(function(){i.update()})),document.addEventListener("mouseover",(function(e){e.target.closest("[data-sb]")?i.stop():i.start()})),document.querySelector(".footer-main__anchor")&&document.querySelector(".footer-main__anchor").addEventListener("click",(function(){i.scrollTo(0)})),document.querySelectorAll(".item-card__slide").length&&document.querySelectorAll(".item-card__slide").forEach(((e,t)=>{document.querySelectorAll(".item-card__thumbs-slide")[t].addEventListener("click",(function(){window.innerWidth>1024&&i.scrollTo(e,{offset:-1,callback:()=>{(0,c.E)(t,document.querySelectorAll(".item-card__thumbs-slide"))}})}))})),document.addEventListener("bodyLock",(function(){i.stop()})),document.addEventListener("bodyUnlock",(function(){i.start()}))},1863:(e,t,o)=>{o.d(t,{jo:()=>r});const r=(e,t)=>{for(var o=0;o<e.length;o++)e[o].classList.remove(t)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCLDRCQUMzQixHQUlULEdBQUUsSUFJUkYsU0FBUytCLGlCQUFpQixZQUFZLFdBQ3BDbEIsRUFBV2UsTUFDYixJQUNBNUIsU0FBUytCLGlCQUFpQixjQUFjLFdBQ3RDbEIsRUFBV0wsT0FDYixHLG1DQzlETyxNQUFNWixFQUFnQkEsQ0FBQzhELEVBQU9DLEtBQ25DLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJRixFQUFNdEIsT0FBUXdCLElBQ2hDRixFQUFNRSxHQUFHL0QsVUFBVWdFLE9BQU9GLEVBQzVCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXNldHVwLy4vc3JjL2pzL2FuaW0vaXRlbS1jYXJkLWNhcm91c2VsLmpzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9zcmMvanMvbGliL2xvY29tb3RpdmUtc2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9hbGxcIjtcbmltcG9ydCB7IHJlbW92ZUNsYXNzZXMgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3QgbW0gPSBnc2FwLm1hdGNoTWVkaWEoKTtcblxuZXhwb3J0IGNvbnN0IHNldFRodW1ic0NsYXNzZXMgPSAoaWR4LCB0aHVtYnMpID0+IHtcbiAgcmVtb3ZlQ2xhc3Nlcyh0aHVtYnMsIFwiX2lzLWFjdGl2ZVwiKTtcbiAgdGh1bWJzW2lkeF0gJiYgdGh1bWJzW2lkeF0uY2xhc3NMaXN0LmFkZChcIl9pcy1hY3RpdmVcIik7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEl0ZW1DYXJkQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tY2FyZF9fc3dpcGVyXCIpKSB7XG4gICAgbW0uYWRkKFwiKG1pbi13aWR0aDogMTAyNHB4KVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0aHVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tY2FyZF9fdGh1bWJzLXNsaWRlXCIpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tY2FyZF9fc2xpZGVcIikuZm9yRWFjaCgoc2xpZGUsIGlkeCkgPT4ge1xuICAgICAgICBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBzbGlkZSxcbiAgICAgICAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgICAgICAgICAgIGVuZDogXCJib3R0b20gYm90dG9tXCIsXG4gICAgICAgICAgICBvbkVudGVyOiAoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRUaHVtYnNDbGFzc2VzKGlkeCwgdGh1bWJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVudGVyQmFjazogKGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGh1bWJzQ2xhc3NlcyhpZHgsIHRodW1icyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgTG9jb21vdGl2ZVNjcm9sbCBmcm9tIFwibG9jb21vdGl2ZS1zY3JvbGxcIjtcbmltcG9ydCBcIi4uLy4uL3Njc3MvY29tbW9uL2xvY29tb3RpdmUtc2Nyb2xsLnNjc3NcIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQge1xuICBpbml0SXRlbUNhcmRDYXJvdXNlbCxcbiAgc2V0VGh1bWJzQ2xhc3Nlcyxcbn0gZnJvbSBcIi4uL2FuaW0vaXRlbS1jYXJkLWNhcm91c2VsXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvYWxsXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBjb25zdCBsb2NvU2Nyb2xsID0gbmV3IExvY29tb3RpdmVTY3JvbGwoe1xuICBlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxuICBzbW9vdGg6IHRydWUsXG4gIC8vIG11bHRpcGxpZXI6IDEsXG4gIG1vYmlsZToge1xuICAgIHNtb290aDogZmFsc2UsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIHNtb290aDogZmFsc2UsXG4gICAgYnJlYWtwb2ludDogMTAyNSxcbiAgfSxcbn0pO1xuXG5uZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBsb2NvU2Nyb2xsLmRlc3Ryb3koKTtcbiAgICBsb2NvU2Nyb2xsLnVwZGF0ZSgpO1xuICAgIGxvY29TY3JvbGwuaW5pdCgpO1xuICB9LCAxMDApO1xufSkub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSk7XG5cbmNvbnN0IGZpeFNjcm9sbFRyaWdnZXIgPSAoKSA9PiB7XG4gIFNjcm9sbFRyaWdnZXIuc2Nyb2xsZXJQcm94eShsb2NvU2Nyb2xsLmVsLCB7XG4gICAgc2Nyb2xsVG9wKHZhbHVlKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgICA/IGxvY29TY3JvbGwuc2Nyb2xsVG8odmFsdWUsIDAsIDApXG4gICAgICAgIDogbG9jb1Njcm9sbC5zY3JvbGwuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgfSxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB9O1xuICAgIH0sXG4gICAgcGluVHlwZTogbG9jb1Njcm9sbC5lbC5zdHlsZS50cmFuc2Zvcm0gPyBcInRyYW5zZm9ybVwiIDogXCJmaXhlZFwiLFxuICB9KTtcblxuICBTY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWZyZXNoXCIsICgpID0+IGxvY29TY3JvbGwudXBkYXRlKCkpO1xuICBTY3JvbGxUcmlnZ2VyLmRlZmF1bHRzKHsgc2Nyb2xsZXI6IGxvY29TY3JvbGwuZWwgfSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgU2Nyb2xsVHJpZ2dlci5yZWZyZXNoKCk7XG4gICAgU2Nyb2xsVHJpZ2dlci51cGRhdGUoKTtcbiAgfSwgMCk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlU2Nyb2xsID0ge1xuICB0b3VjaFN0YXJ0OiAoKSA9PiB7XG4gICAgbG9jb1Njcm9sbC5zdG9wKCk7XG4gIH0sXG4gIHRvdWNoRW5kOiAoKSA9PiB7XG4gICAgbG9jb1Njcm9sbC5zdGFydCgpO1xuICB9LFxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgZml4U2Nyb2xsVHJpZ2dlcigpO1xuICBpbml0SXRlbUNhcmRDYXJvdXNlbCgpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxvY29TY3JvbGwudXBkYXRlKCk7XG4gIH0sIDEwMDApO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gIGxvY29TY3JvbGwudXBkYXRlKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLXNiXVwiKSkge1xuICAgIGxvY29TY3JvbGwuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGxvY29TY3JvbGwuc3RhcnQoKTtcbiAgfVxufSk7XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlci1tYWluX19hbmNob3JcIikpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5mb290ZXItbWFpbl9fYW5jaG9yXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsb2NvU2Nyb2xsLnNjcm9sbFRvKDApO1xuICAgIH0pO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWNhcmRfX3NsaWRlXCIpLmxlbmd0aCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tY2FyZF9fc2xpZGVcIikuZm9yRWFjaCgoc2xpZGUsIGlkeCkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWNhcmRfX3RodW1icy1zbGlkZVwiKVxuICAgICAgW2lkeF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNCkge1xuICAgICAgICAgIGxvY29TY3JvbGwuc2Nyb2xsVG8oc2xpZGUsIHtcbiAgICAgICAgICAgIG9mZnNldDogLTEsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRUaHVtYnNDbGFzc2VzKFxuICAgICAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tY2FyZF9fdGh1bWJzLXNsaWRlXCIpLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiYm9keUxvY2tcIiwgZnVuY3Rpb24gKCkge1xuICBsb2NvU2Nyb2xsLnN0b3AoKTtcbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJvZHlVbmxvY2tcIiwgZnVuY3Rpb24gKCkge1xuICBsb2NvU2Nyb2xsLnN0YXJ0KCk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBzZXRTbGlkZUNvbnRlbnQgPSAoc2xpZGUpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZWFtX19uYW1lXCIpLmlubmVySFRNTCA9IHNsaWRlLmRhdGFzZXQubmFtZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZWFtX190ZXh0X3RlYW1cIikuaW5uZXJIVE1MID0gc2xpZGUuZGF0YXNldC50ZWFtO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlYW1fX3RleHRfZGF0ZVwiKS5pbm5lckhUTUwgPSBzbGlkZS5kYXRhc2V0LmRhdGU7XG59O1xuXG4vKipcbiAqIHRvZ2dsZXMgYm9keSBsb2NrXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9ja1wiKSkge1xuICAgIGJvZHlVbmxvY2soMCk7XG4gIH0gZWxzZSB7XG4gICAgYm9keUxvY2soMCk7XG4gIH1cbn07XG4vKipcbiAqIHVubG9ja3MgYm9keVxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5faXMtbG9ja2VkXCIpKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIl9sb2NrXCIpO1xuXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJvZHlVbmxvY2tcIikpO1xuICAgIH0sIDApO1xuICB9XG59O1xuLyoqXG4gKiBsb2NrcyBib2R5XG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5faXMtbG9ja2VkXCIpKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJvZHlMb2NrXCIpKTtcbiAgICB9LCAwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBjb252ZXJ0cyByZW0gdG8gcGl4ZWxzXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtVmFsdWVcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW1WYWx1ZSkge1xuICBjb25zdCBodG1sRm9udFNpemUgPSBwYXJzZUZsb2F0KFxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZSxcbiAgKTtcblxuICBjb25zdCBweFZhbHVlID0gcmVtVmFsdWUgKiBodG1sRm9udFNpemU7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQocHhWYWx1ZSkgKyBcInB4XCI7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzc2VzID0gKGFycmF5LCBjbGFzc05hbWUpID0+IHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwibW0iLCJtYXRjaE1lZGlhIiwic2V0VGh1bWJzQ2xhc3NlcyIsImlkeCIsInRodW1icyIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbml0SXRlbUNhcmRDYXJvdXNlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2xpZGUiLCJ0aW1lbGluZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJvbkVudGVyIiwiZSIsIm9uRW50ZXJCYWNrIiwibG9jb1Njcm9sbCIsIkxvY29tb3RpdmVTY3JvbGwiLCJlbCIsInNtb290aCIsIm1vYmlsZSIsInRhYmxldCIsImJyZWFrcG9pbnQiLCJSZXNpemVPYnNlcnZlciIsInNldFRpbWVvdXQiLCJkZXN0cm95IiwidXBkYXRlIiwiaW5pdCIsIm9ic2VydmUiLCJ0b2dnbGVTY3JvbGwiLCJ0b3VjaFN0YXJ0Iiwic3RvcCIsInRvdWNoRW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbGVyUHJveHkiLCJzY3JvbGxUb3AiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNjcm9sbFRvIiwic2Nyb2xsIiwiaW5zdGFuY2UiLCJ5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicGluVHlwZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGVmYXVsdHMiLCJzY3JvbGxlciIsInJlZnJlc2giLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib2Zmc2V0IiwiY2FsbGJhY2siLCJhcnJheSIsImNsYXNzTmFtZSIsImkiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9