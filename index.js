import{r as e}from"./assets/rolldown-runtime-hePW80VL.js";import{n as t,r as n,t as r}from"./assets/vendor-DjMoOC5B.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1);function a(e){return t.get(`https://pixabay.com/api/`,{params:{key:`56969779-79703cf16e75705543728b96e`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:`true`}}).then(e=>{if(e.data.hits.length)return e.data.hits;{let e=Error();throw e.code=`NO_IMAGES`,e}})}var o=e(r(),1),s=o.default.default??o.default,c=document.querySelector(`.gallery`),l=new s(`.gallery a`);function u(e){let t=e.map(e=>`<li class="galleryItemForm">
            <a class="gallery-link" href = "${e.largeImageURL}">    
                <img
                    src= "${e.webformatURL}"
                    alt= "${e.tags}"/>
                <ul class="galleryItemData">
                    <li>
                        <p> Likes </p>
                        <p>${e.likes}</p>
                    </li>
                    <li>
                        <p> Views</p>
                        <p>${e.views}</p>
                    </li>
                    <li>
                        <p> Comments </p>
                        <p>${e.comments}</p>
                    </li>
                    <li>
                        <p>Downloads</p>
                        <p>${e.downloads}</p>
                    </li>
                </ul>
            </a>
        </li> `).join(``);c.insertAdjacentHTML(`afterbegin`,t),l.refresh()}function d(){c.innerHTML=` `}document.querySelector(`.loader`);var f=document.querySelector(`form`),p=document.querySelector(`input`);f.addEventListener(`submit`,e=>{e.preventDefault(),d();let t=p.value.trim();t===``?i.default.error({message:`Field can't be empty.`}):a(t).then(e=>{u(e)}).catch(e=>{if(e.code===`NO_IMAGES`){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`});return}})});
//# sourceMappingURL=index.js.map