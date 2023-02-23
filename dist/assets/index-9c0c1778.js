(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d={canyon:{name:"Grand Canyon",avatar:"images/GrandCanyon.jpg",price:829,bio:"Mysterious. Overpowering. Strange.",hasBeenSwiped:!1,hasBeenLiked:!1},rushmore:{name:"Mount Rushmore",avatar:"images/MountRushmore.jpg",price:1152,bio:"The Shrine of Democracy",hasBeenSwiped:!1,hasBeenLiked:!1},liberty:{name:"Statue of Liberty",avatar:"images/StatueOfLiberty.jpg",price:1649,bio:"Liberty Enlightening the World",hasBeenSwiped:!1,hasBeenLiked:!1}},f=i=>`<img id="profile-placeholder-icon" 
        class="--placeholder-profile-icon --profile--icon" 
        src="images/placeholder-state.png" 
        alt="empty placeholder over ${i} photo">`;class m{constructor(o){Object.assign(this,o),this.statusHtml=f(this.name)}getProfileHtml(){const{name:o,avatar:l,price:r,bio:e,statusHtml:t}=this;return`<img id="profile-img" class="--profile-img" src="${l}" alt="photo of the ${o}">
            ${t}
        <h1 id="profile-title" class="--profile-title XXXIIpt semi-bold">${o}, <span>$${r}</span></h1>
        <p id="profile-text" class="--profile-text XXIVpt">${e}</p>
        <div id="action-buttons" class="--action-buttons">
            <button id="reject-btn" class="--reject-btn btn" data-reject="reject"><img id="reject-icon" class="--reject-icon --action-icon" src="images/nope-icon.png" alt="reject button" data-reject="reject"></button>
            <button id="like-btn" class="--like-btn btn" data-like="like"><img id="like-icon" class="--like-icon --action-icon" src="images/like-icon.png" alt="like button" data-like="like"></button>
        </div>`}setHasBeenLiked(){this.statusHtml=`<img id="profile-like-icon" 
        class="--profile-like-icon --profile--icon" 
        src="images/like-state.png" 
        alt="like icon over ${this.name} photo">`,this.hasBeenLiked=!this.hasBeenLiked,this.setHasBeenSwiped()}setHasBeenRejected(){this.statusHtml=`<img id="profile-reject-icon" 
        class="--profile-reject-icon --profile--icon" 
        src="images/nope-state.png" 
        alt="nope icon over ${this.name} photo">`,this.setHasBeenSwiped()}setHasBeenSwiped(){this.hasBeenSwiped=!this.hasBeenSwiped}}const u=["canyon","rushmore","liberty"];let a=!1;function p(){const i=d[u.shift()];return i?new m(i):""}function n(){s?document.getElementById("profile").innerHTML=s.getProfileHtml():document.getElementById("main-content").innerHTML=`<div id="no-profile" class="--no-profile">
            <img id="no-profile-img" class="--no-profile-img" src="images/no-matches.jpg" alt="empty jar"/>
            <p id="no-profile-emoji" class="--no-profile-emoji text-center">🏠</p>
            <p id="no-profile-text" class="--no-profile-text text-center">Sorry, no matches at this time</p>
        </div>`}document.addEventListener("click",i=>{a||(a=!0,i.target.dataset.reject?(s.setHasBeenRejected(),n(),setTimeout(()=>{s=p(),n(),a=!1},3e3)):i.target.dataset.like&&(s.setHasBeenLiked(),n(),setTimeout(()=>{s=p(),n(),a=!1},3e3)))});let s=p();n();
