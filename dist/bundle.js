(()=>{"use strict";const e=function(){return function(){const e=document.createElement("header");return e.classList.add("header"),e.appendChild(function(){const e=document.createElement("img");return e.src="./image/logo.png",e.alt="logo",e}()),e.appendChild(function(){const e=document.createElement("nav");return e.appendChild(function(e){const t=document.createElement("ul"),n=document.createElement("li");return n.textContent="Todo List",t.appendChild(n),t}()),e}()),e}()},t=(()=>{const e=["create","delete"],t=["sfdasdfsadf"];return{getCommands:()=>{e.forEach((e=>e))},getList:()=>t,addItem:e=>{t.push(e)}}})(),n=(()=>{const e=document.getElementsByClassName("todo-list");for(let e=0;e<t.getList().length;e++)console.log(n());const n=()=>e;return{addTodo:e=>{t.addItem(e.value),e.value=""}}})();function o(e){const t=document.createElement("p");return t.textContent=e,t}const d=function(){return function(){const e=document.createElement("div");return e.classList.add("console"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("input-console");const t=document.createElement("div");return t.classList.add("input-area"),e.appendChild(o("> wake up, user")),t.appendChild(o("user@todolist:~$ ")),t.appendChild(function(){const e=document.createElement("textarea");return e.cols=30,e.rows=1,e.wrap="off",e.addEventListener("keypress",(t=>{"Enter"==t.key&&n.addTodo(e)})),e}()),e.append(t),e}()),e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("ul");return t.classList.add("todo-list"),e.classList.add("output-console"),e.appendChild(t),e}()),e}()};const c=function(){return function(){const e=document.createElement("footer");return e.classList.add("footer"),e.appendChild(function(){const e=document.createElement("p");return e.textContent="Developed by dticed",e}()),e}()};!function(){const t=document.querySelector("body");t.appendChild(e()),t.appendChild(d()),t.appendChild(c())}()})();