(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let c=0;document.querySelector("#app").innerHTML=`
  <div>
    <h1 id="countText">0</h1>
    <div class="card">
      <button id="counter" type="button">Räkna</button>
    </div>
  </div>
`;const u=document.querySelector("#counter"),s=document.querySelector("#countText");u.onclick=()=>{c++,s.innerText=`${c}`};
