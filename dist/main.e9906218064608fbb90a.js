(()=>{"use strict";class e{constructor(e,t,l){this.description=e,this.completed=t,this.index=l}}const t=[];function l(){const e=document.querySelector(".form"),t=document.createElement("div");t.className="input-div",e.appendChild(t);const l=document.createElement("input");l.className="input",l.type="checkbox";const n=document.createElement("p");n.className="listContent";const s=document.createElement("i");s.className="fas fa-ellipsis-v";const o=document.createElement("i");o.className="fas fa-trash-alt icon2",t.append(l,n,s,o),o.addEventListener("click",(()=>{e.removeChild(t);const l=JSON.parse(localStorage.getItem("list")),s=l.filter((e=>e.description===n.textContent)),o=[];for(let e=0;e<l.length;e+=1)s[0].description!==l[e].description&&o.push(l[e]);localStorage.setItem("list",JSON.stringify(o))}));let c=1;l.addEventListener("click",(()=>{s.classList.toggle("remove-icon-active"),o.classList.toggle("icon2"),n.classList.toggle("listContent-disable"),t.classList.toggle("changeBg");const e=JSON.parse(localStorage.getItem("list")),l=[],i=document.querySelectorAll(".input-div");for(let t=0;t<e.length;t+=1)i[t].classList.contains("changeBg")?(e[t].completed=!0,c+=1):e[t].completed=!1,l.push(e[t]),localStorage.setItem("list",JSON.stringify(l))})),s.addEventListener("click",(()=>{const e=document.createElement("input");e.type="text",e.className="listContent",e.style.backgroundColor="#fffed3",t.style.backgroundColor="#fffed3",e.value=n.textContent,t.replaceChild(e,n),e.addEventListener("keypress",(l=>{if("Enter"===l.key&&e.value){const l=JSON.parse(localStorage.getItem("list")),s=l.filter((e=>e.description===n.textContent)),o=[];for(let t=0;t<l.length;t+=1)l[t].index===s[0].index&&(l[t].description=e.value),o.push(l[t]),localStorage.setItem("list",JSON.stringify(o));t.replaceChild(n,e),n.textContent=e.value}}))})),document.querySelector(".clear").addEventListener("click",(()=>{const t=JSON.parse(localStorage.getItem("list")),l=document.querySelectorAll(".changeBg");for(let t=0;t<l.length;t+=1)e.removeChild(l[t]);const n=[];for(let e=0;e<t.length;e+=1)!0!==t[e].completed&&n.push(t[e]);localStorage.setItem("list",JSON.stringify(n))}))}const n=document.getElementById("userInput");n.addEventListener("keypress",(s=>{if("Enter"===s.key&&n.value){const o=new e(n.value,!1,t.length);t.push(o),s.preventDefault(),l();const c=document.querySelectorAll(".listContent");for(let e=0;e<t.length;e+=1)c[e].textContent=t[e].description;n.value=null,localStorage.setItem("list",JSON.stringify(t))}})),window.addEventListener("load",(()=>{let e=[];const t=JSON.parse(localStorage.getItem("list"));for(let n=0;n<t.length;n+=1)l(),document.querySelectorAll(".listContent")[n].textContent=t[n].description,!0===t[n].completed&&(t[n].completed=!1),localStorage.setItem("list",JSON.stringify(t)),e=t}))})();