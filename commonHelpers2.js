import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form"),a=({value:s,delay:e,state:t})=>new Promise((r,l)=>{setTimeout(()=>{t==="fulfilled"?r(s):l(s)},e)});o.addEventListener("submit",s=>{s.preventDefault();const e=o.delay.value,t=o.state.value;a({value:e,delay:e,state:t}).then(r=>i.show({title:"✔️",message:`Fulfilled promise in ${e} ms!`,position:"topRight",messageColor:"#fff",messageSize:"20px",backgroundColor:"#59A10D",close:!1,closeOnClick:!0,progressBarEasing:"linear"})).catch(r=>i.show({title:"❌",message:`Rejected promise in ${e} ms!`,position:"topRight",messageColor:"#fff",messageSize:"20px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0,progressBarEasing:"linear"})),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map
