import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-651d7991.js";const a=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let r;o.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r<=new Date().getTime()?(o.disabled=!0,m.show({title:"❌",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})):o.disabled=!1}};l(a,S);function b(e){const c=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:i,seconds:u}}function n(e){return e.toString().padStart(2,"0")}o.addEventListener("click",g);function g(){o.disabled=!0,a.disabled=!0;const e=setInterval(()=>{const s=r-Date.now();s<1e3&&(clearInterval(e),a.disabled=!1);const t=b(s);f.textContent=n(t.days),h.textContent=n(t.hours),y.textContent=n(t.minutes),p.textContent=n(t.seconds)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
