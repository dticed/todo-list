(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){document.querySelector("body").appendChild(function(){const t=document.createElement("div");return t.classList.add("console"),t.appendChild(function(){const t=document.createElement("div");t.classList.add("input-console");const n=document.createElement("div");return n.classList.add("input"),t.appendChild(e("> wake up, user")),n.appendChild(e("user@todolist:~$ ")),n.appendChild(function(){const e=document.createElement("textarea");return e.cols=30,e.rows=1,e}()),t.append(n),t}()),t.appendChild(function(){const e=document.createElement("div");return e.classList.add("output-console"),e}()),t}())};const n=function(){const e=document.querySelector("body");return e.appendChild(function(){const e=document.createElement("footer");return e.classList.add("footer"),e.appendChild(function(){const e=document.createElement("p");return e.textContent="Developed by dticed",e}()),e}()),e};(function(){const e=document.querySelector("body");e.appendChild(function(){const e=document.createElement("header");return e.classList.add("header"),e.appendChild(function(){const e=document.createElement("img");return e.src="./image/logo.png",e.alt="logo",e}()),e.appendChild(function(){const e=document.createElement("nav");return e.appendChild(function(e){const t=document.createElement("ul"),n=document.createElement("li");return n.textContent="Todo List",t.appendChild(n),t}()),e}()),e}())})(),t(),n()})();